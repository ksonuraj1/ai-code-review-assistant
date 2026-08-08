export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export interface ReviewAssistantProps {
  language: string;
  code: string;
  review: string;
}

export interface QuickPrompt {
  id: string;
  label: string;
  prompt: string;
}
