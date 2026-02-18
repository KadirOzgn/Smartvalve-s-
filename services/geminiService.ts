
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `Sen bir SmartValves uzmanısın. SmartValves tarımsal otonom yönetim sistemleri hakkında derin bilgiye sahipsin. 
Kullanıcılara ürünlerimiz (SVL2, SVL4, Gateway, P-Pulse), AIGR altyapımız, LoRaWAN teknolojimiz ve su tasarrufu vizyonumuz hakkında bilgi ver.
Cevapların profesyonel, yardımsever ve teknik olarak doğru olmalıdır. Türkçe konuşmalısın.`;

export const getSmartAdvice = async (history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Send only the last user message for simplicity, or we could send history
    const lastUserMessage = history[history.length - 1].text;
    const response = await chat.sendMessage({ message: lastUserMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Şu an cevap veremiyorum, lütfen daha sonra tekrar deneyin veya bizimle iletişime geçin.";
  }
};
