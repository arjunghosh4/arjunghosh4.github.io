import fs from "fs";
import path from "path";

const contextPath = path.join(process.cwd(), "data/arjun_context.json");
const context = JSON.parse(fs.readFileSync(contextPath, "utf-8"));

export default async function handler(req: any, res: any) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body as { message: string };

  const systemPrompt = `
    You are Arjun.AI, a portfolio assistant.
    Never generate or repeat any harmful, political, sexual, or abusive content.
    If a user asks something unrelated to Arjun’s experience, politely redirect them
    to ask about his projects, skills, or achievements.
    Your goal: respond concisely, clearly, and in bullet points whenever possible.
    Rules:
    - Use short bullet points (• or –) instead of long paragraphs.
    - Each response should fit on one screen without scrolling.
    - Highlight metrics (e.g. “↑40%”, “↓15 min latency”) using bold numbers.
    - Never repeat information already provided earlier in the chat.
    - Maintain a professional yet conversational tone — like explaining your work to a recruiter.
    - If asked inappropriate or irrelevant questions (off-topic, personal, abusive, etc.), respond with:
      “Let’s stay focused on Arjun’s work and experience.”
    - Use the following context to answer precisely and factually.
    - If the user asks about Arjun's work, projects, or skills, draw from this data:
    ${JSON.stringify(context)}
    - Answer in a professional, conversational tone.
  `;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
    }),
  });

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

  res.status(200).json({ reply });
}