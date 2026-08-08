import { QuickPrompt } from "../Assistant.types";

export const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: "explain",
    label: "Explain Review",
    prompt: "Explain this review in simple language.",
  },
  {
    id: "performance",
    label: "Improve Performance",
    prompt: "How can I improve the performance of this code?",
  },
  {
    id: "security",
    label: "Improve Security",
    prompt: "Are there any additional security improvements?",
  },
  {
    id: "tests",
    label: "Generate Tests",
    prompt: "Generate unit tests for this code.",
  },
  {
    id: "refactor",
    label: "Refactor",
    prompt: "Refactor the updated code using best practices.",
  },
  {
    id: "typescript",
    label: "Convert to TypeScript",
    prompt: "Convert the updated code to TypeScript.",
  },
];
