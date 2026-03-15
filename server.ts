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

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error("OPENROUTER_API_KEY is not configured");
      return res.status(500).json({ 
        success: false, 
        data: null, 
        error: "Audit engine is not configured. Please set OPENROUTER_API_KEY." 
      });
    }

    try {
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
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenRouter API Error:", errorData);
        return res.status(500).json({ 
          success: false, 
          data: null, 
          error: "Failed to connect to AI engine" 
        });
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        return res.status(500).json({ 
          success: false, 
          data: null, 
          error: "AI engine returned an empty response" 
        });
      }

      let auditResult;
      try {
        const content = data.choices[0].message.content.trim();
        auditResult = JSON.parse(content);
        
        // Validation
        if (!auditResult.details || !Array.isArray(auditResult.details)) {
          auditResult.details = [
            "Online visibility is currently limited.",
            "Local search optimization is required.",
            "Social media presence needs professional management.",
            "Business directory listings are incomplete.",
            "Competitive digital advantage is low."
          ];
        }
        if (!auditResult.summary) auditResult.summary = "Digital audit completed with critical findings.";
        if (!auditResult.upgradePlan) auditResult.upgradePlan = "Contact The Søren Studio for a full digital transformation strategy.";
        if (typeof auditResult.rating !== 'number') auditResult.rating = 25;
        
        res.json({
          success: true,
          data: auditResult,
          error: null
        });
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        res.status(500).json({ 
          success: false, 
          data: null, 
          error: "AI response format was invalid" 
        });
      }
    } catch (error) {
      console.error("Audit Error:", error);
      res.status(500).json({ 
        success: false, 
        data: null, 
        error: "Internal Server Error" 
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
