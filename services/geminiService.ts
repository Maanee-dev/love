
import { GoogleGenAI } from "@google/genai";

export const generateLoveNote = async (prompt?: string): Promise<string> => {
  /* Fixed: Initialize GoogleGenAI directly with process.env.API_KEY per guidelines */
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `
    You are a romantic, poetic partner writing short, meaningful "reasons why I love you" notes for a girlfriend.
    The tone should be:
    - Sincere and deeply emotional
    - Editorial and artistic (like a classic romance novel or modern aesthetic scrapbook)
    - Concise (1-3 sentences)
    - Avoid clichés like "I love your eyes" unless you make it poetic.
    - Focus on small details, shared feelings, and the beauty of existence together.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt || "Write a beautiful reason why I love my girlfriend. Focus on a small, tender detail.",
      config: {
        systemInstruction,
        temperature: 0.9,
        maxOutputTokens: 150,
      },
    });

    return response.text || "Every day with you is a gift I never knew I deserved.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The way you hold my hand makes the rest of the world disappear.";
  }
};
