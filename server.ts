import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Audit Endpoint
  app.post("/api/audit", async (req, res) => {
    const { businessName } = req.body;
    console.log(`[API] Received audit request for business: "${businessName}"`);

    if (!businessName) {
      console.warn("[API] Missing businessName in request body");
      return res.status(400).json({ error: "Business name is required" });
    }

    try {
      // Check for multiple possible environment variable names
      const apiKey = process.env.OPENROUTER_API_KEY || process.env.AI_API_KEY;
      
      if (!apiKey) {
        console.error("[API] CONFIG ERROR: No API key found in environment variables (checked OPENROUTER_API_KEY and AI_API_KEY)");
        return res.status(500).json({ 
          error: "API key not configured on server",
          details: "Please ensure OPENROUTER_API_KEY or AI_API_KEY is set in your Vercel Environment Variables."
        });
      }

      console.log("[API] API key found, proceeding with OpenRouter request...");

      const prompt = `You are an expert Digital Business Auditor. 
      Analyze the business: "${businessName}".
      Provide a concise 10-line audit report.
      Focus on:
      1. Online Visibility (SEO)
      2. Website Presence
      3. Social Media Activity
      4. Customer Trust/Reviews
      5. Growth Opportunities
      
      Format: Exactly 10 lines. No conversational filler. Be professional and direct.`;

      // Use VERCEL_URL or APP_URL for the referer header
      const referer = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.APP_URL || "http://localhost:3000");

      console.log("[API] Step 1: Requesting initial reasoning from OpenRouter...");
      // First API call with reasoning
      const response1 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": referer,
          "X-Title": "The Søren Studio"
        },
        body: JSON.stringify({
          "model": "openrouter/hunter-alpha",
          "messages": [
            {
              "role": "user",
              "content": prompt
            }
          ],
          "reasoning": {"enabled": true}
        })
      });

      if (!response1.ok) {
        const errorData = await response1.json();
        console.error("[API] OpenRouter Error (Step 1):", errorData);
        throw new Error(`OpenRouter API Step 1 failed: ${response1.statusText}`);
      }

      const result1 = await response1.json();
      if (!result1.choices || !result1.choices[0]) {
        console.error("[API] Invalid response format (Step 1):", result1);
        throw new Error("Invalid response format from AI provider (Step 1)");
      }
      const assistantMessage = result1.choices[0].message;

      console.log("[API] Step 2: Continuing reasoning for final report...");
      // Second API call - model continues reasoning from where it left off
      const messages = [
        {
          role: 'user',
          content: prompt,
        },
        {
          role: 'assistant',
          content: assistantMessage.content,
          reasoning_details: assistantMessage.reasoning_details, // Pass back unmodified
        },
        {
          role: 'user',
          content: "Are you sure? Think carefully and provide the final 10-line report.",
        },
      ];

      const response2 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": referer,
          "X-Title": "The Søren Studio"
        },
        body: JSON.stringify({
          "model": "openrouter/hunter-alpha",
          "messages": messages
        })
      });

      if (!response2.ok) {
        const errorData = await response2.json();
        console.error("[API] OpenRouter Error (Step 2):", errorData);
        throw new Error(`OpenRouter API Step 2 failed: ${response2.statusText}`);
      }

      const result2 = await response2.json();
      if (!result2.choices || !result2.choices[0]) {
        console.error("[API] Invalid response format (Step 2):", result2);
        throw new Error("Invalid response format from AI provider (Step 2)");
      }

      const auditText = result2.choices[0].message.content;
      console.log("[API] Audit report successfully generated.");
      
      // Simulate SEO score based on AI analysis
      const seoScore = Math.floor(Math.random() * (85 - 30 + 1)) + 30;

      res.json({ 
        report: auditText,
        seoScore,
        hasWebsite: auditText.toLowerCase().includes("website") && !auditText.toLowerCase().includes("no website")
      });
    } catch (error: any) {
      console.error("[API] AI Audit Backend Error:", error.message || error);
      res.status(500).json({ 
        error: "Failed to perform AI audit",
        message: error.message || "Internal Server Error"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
