import { GoogleGenAI } from "@google/genai";



// Initialize Gemini client strictly with process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const enhanceMessageTone = async (message: string): Promise<string> => {
  if (!message || message.length < 5) return message;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Improve the professionalism and clarity of this contact message, but keep it concise and under 100 words: "${message}"`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Directly access the .text property from the response object
    return response.text?.trim() || message;
  } catch (error) {
    console.error("Gemini Error:", error);
    return message;
  }
};