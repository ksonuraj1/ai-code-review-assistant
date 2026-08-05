import groq from "../providers/groq.provider";

interface ReviewRequest {
  language: string;
  code: string;
}

interface ReviewResponse {
  review: string;
}

export const reviewCodeService = async ({
  language,
  code,
}: ReviewRequest): Promise<ReviewResponse> => {
  const prompt = `
You are a Senior Staff Software Engineer.

Review the following ${language} code.

Evaluate:

- Correctness
- Bugs
- Performance
- Readability
- Maintainability
- Security
- Best Practices
- Scalability

Return your answer in Markdown.

Code:

\`\`\`${language}
${code}
\`\`\`
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an experienced software engineer performing professional code reviews.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.3,
  });

  return {
    review: completion.choices[0]?.message?.content ?? "No review generated.",
  };
};
