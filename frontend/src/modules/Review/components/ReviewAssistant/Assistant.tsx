"use client";

import { useState } from "react";

import AssistantInput from "./AssistantInput";
import AssistantMessage from "./AssistantMessage";
import QuickPrompt from "./QuickPrompt";

import { Message, ReviewAssistantProps } from "./Assistant.types";
import Card from "@/src/components/CoreComponent/Card";
import { QUICK_PROMPTS } from "./Constants/ReviewAssistant.constats";

export default function Assistant({
  language,
  code,
  review,
}: ReviewAssistantProps) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (prompt?: string) => {
    const text = (prompt ?? question).trim();

    if (!text) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      /**
       * TODO
       *
       * Replace this with your backend endpoint.
       */

      // const response = await askReviewAssistant({
      //   language,
      //   code,
      //   review,
      //   question: text,
      // });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "This is a placeholder response. Connect this component with your backend assistant endpoint.",
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-8 p-6">
      <div className="space-y-6">
        {/* Header */}

        <div>
          <h2 className="text-2xl font-semibold text-white">AI Assistant</h2>

          <p className="mt-2 text-sm text-slate-400">
            Ask follow-up questions about this review.
          </p>
        </div>

        {/* Quick Prompts */}

        <div className="flex flex-wrap gap-3">
          {QUICK_PROMPTS.map((item) => (
            <QuickPrompt
              key={item.id}
              label={item.label}
              onClick={() => sendMessage(item.prompt)}
            />
          ))}
        </div>

        {/* Conversation */}

        <div className="space-y-4 rounded-xl border border-slate-700 bg-slate-900 p-4">
          {messages.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              Start a conversation with the AI assistant.
            </div>
          ) : (
            messages.map((message) => (
              <AssistantMessage key={message.id} message={message} />
            ))
          )}
        </div>

        {/* Input */}

        <AssistantInput
          value={question}
          loading={loading}
          onChange={setQuestion}
          onSubmit={() => sendMessage()}
        />
      </div>
    </Card>
  );
}
