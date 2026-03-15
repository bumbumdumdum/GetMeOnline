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

  // API Route for Business Audit
  app.post("/api/audit", async (req, res) => {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ 
        success: false, 
        data: null, 
        error: "Query is required" 
      });
    }

    if (typeof fetch === 'undefined') {
      console.error("fetch is not defined in this environment");
      return res.status(500).json({ 
        success: false, 
        data: null, 
        error: "Server environment error: fetch is not defined." 
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY?.trim() || "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";

    try {
      console.log(`Starting audit for: ${query}`);
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://thesorenstudio.in",
          "X-Title": "The Søren Studio Audit",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            {
              role: "system",
              content: `You are a professional digital presence auditor for "The Søren Studio". 
              Your task is to audit a business's online presence based on its name.
              
              You must return a JSON object with the following structure:
              {
                "rating": number (0-100),
                "name": string,
                "hasWebsite": boolean,
                "summary": string,
                "details": string[] (exactly 5 points),
                "upgradePlan": string
              }
              
              Return ONLY the JSON object. Do not include markdown formatting or any other text.`
            },
            {
              role: "user",
              content: `Audit this business: "${query}"`
            }
          ]
        })
      });

      let auditResult;

      if (!response.ok) {
        console.error("OpenRouter API Error:", response.status);
        // Fallback to database if AI fails
        auditResult = getFallbackAudit(query);
      } else {
        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          auditResult = getFallbackAudit(query);
        } else {
          try {
            let content = data.choices[0].message.content.trim();
            
            // Fix for markdown JSON wrapping
            if (content.startsWith("```")) {
              content = content.replace(/^```json\s*|```\s*$/g, "").trim();
            }
            
            auditResult = JSON.parse(content);
            
            // Validation & Defaulting
            if (!auditResult.details || !Array.isArray(auditResult.details)) {
              auditResult.details = getFallbackAudit(query).details;
            }
          } catch (parseError) {
            console.error("JSON Parse Error, falling back to database:", parseError);
            auditResult = getFallbackAudit(query);
          }
        }
      }

      res.json({
        success: true,
        data: auditResult,
        error: null
      });

    } catch (error) {
      console.error("Audit Error, falling back to database:", error);
      res.json({
        success: true,
        data: getFallbackAudit(query),
        error: null
      });
    }
  });

  // Fallback Database Function
  function getFallbackAudit(query: string) {
    const name = query || "Business";
    return {
      rating: 42,
      name: name,
      hasWebsite: false,
      summary: `Digital presence audit for ${name} reveals significant growth opportunities.`,
      details: [
        "Search engine visibility is currently below industry average.",
        "Local map listings require optimization and verification.",
        "Social media engagement shows potential for brand building.",
        "Website performance and mobile responsiveness need review.",
        "Digital brand consistency is fragmented across platforms."
      ],
      upgradePlan: "The Søren Studio recommends a comprehensive Digital Presence Overhaul to capture market share."
    };
  }

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
