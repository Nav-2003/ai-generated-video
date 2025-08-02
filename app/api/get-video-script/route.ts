import { chatSession } from "@/configs/AiModel";
import { NextRequest, NextResponse } from "next/server";
export  async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }
    const result = await chatSession.sendMessage(prompt);
    const response = await result.response.text();
    const cleaned = response.replace(/```json|```/g, "").trim();
    let json;
    try {
      json = JSON.parse(cleaned);
    } catch (e) {
      return NextResponse.json({
        error: "Invalid JSON format from Gemini",
        raw: cleaned,
      }, { status: 500 });
    }
    return NextResponse.json(json);
  } catch (e) {
    console.error("Gemini error:", e);
    return NextResponse.json(
      { error: "Internal Server Error", details: String(e) },
      { status: 500 }
    );
  }
}
