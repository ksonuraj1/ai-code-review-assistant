import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  if (!content) {
    return (
      <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900 text-slate-500">
        AI review will appear here after analyzing your code.
      </div>
    );
  }

  return (
    <article
      className="
        prose
        prose-invert
        max-w-none
        prose-headings:text-white
        prose-p:text-slate-300
        prose-strong:text-white
        prose-li:text-slate-300
        prose-code:text-sky-300
        prose-pre:bg-slate-950
        prose-pre:border
        prose-pre:border-slate-700
        prose-pre:rounded-xl
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className } = props;
            const match = /language-(\w+)/.exec(className || "");

            if (!match) {
              return (
                <code className="rounded bg-slate-800 px-1 py-0.5 text-sky-300">
                  {children}
                </code>
              );
            }

            return (
              <CodeBlock
                language={match[1]}
                code={String(children).replace(/\n$/, "")}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
