import { Bot, User } from "lucide-react";

import { Message } from "./Assistant.types";

interface AssistantMessageProps {
  message: Message;
}

export default function AssistantMessage({ message }: AssistantMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <Bot
          className="
            mt-1
            h-8
            w-8
            rounded-full
            bg-blue-600
            p-1.5
            text-white
          "
        />
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-200"
        }`}
      >
        {message.content}
      </div>

      {isUser && (
        <User
          className="
            mt-1
            h-8
            w-8
            rounded-full
            bg-slate-700
            p-1.5
            text-white
          "
        />
      )}
    </div>
  );
}
