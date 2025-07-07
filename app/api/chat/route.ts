import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request. Messages array is required." },
        { status: 400 }
      );
    }

    const userMessage = messages[messages.length - 1]?.content || "";

    const systemPrompt = `You are the 01Code AI Assistant, a helpful and knowledgeable chatbot for 01Code company.

01Code is a leading provider of AI-driven business solutions with two main products:

1. 01Bot - Conversational AI Assistant:
   - Starter Plan: $99/month (500 conversations, basic chatbot, email support)
   - Pro Plan: $199/month (2,500 conversations, customizable flows, multi-channel integration)
   - Enterprise Plan: $499/month (unlimited conversations, custom AI training, 24/7 support)

2. 01Shield - Deepfake Detection & Protection:
   - Basic Protection: $299/month (100 analyses, real-time detection, web dashboard)
   - Business Security: $799/month (1,000 analyses, API access, priority support)
   - Enterprise Fortress: $2,999/month (unlimited analyses, custom AI models, 24/7 SOC support)

Key information:
- Company email: admin@01code.com
- All plans include free trials
- 24/7 support available
- Multi-language support (English & Indonesian)
- Enterprise-grade security and compliance

Guidelines:
- Be helpful, professional, and friendly
- Provide accurate pricing and product information
- Suggest appropriate plans based on user needs
- Offer to connect users with sales team for custom requirements
- Keep responses concise but informative
- Use a conversational tone
- If you don't know something specific, direct them to contact the team

Always end responses with a helpful follow-up question or suggestion.`;

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
      maxTokens: 300,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        error:
          "Sorry, I'm having trouble connecting right now. Please try again or contact us directly at admin@01code.com",
      },
      { status: 500 }
    );
  }
}
