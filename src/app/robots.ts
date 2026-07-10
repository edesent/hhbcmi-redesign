import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI / LLM crawlers so the church can be found and
      // cited by generative search engines (GEO).
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Amazonbot",
          "Bytespider",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.hhbcmi.com/sitemap.xml",
    host: "https://www.hhbcmi.com",
  };
}
