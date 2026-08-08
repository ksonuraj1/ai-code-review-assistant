import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

interface UpdatedCodeEditorProps {
  language: string;
  code: string;
}

export default function UpdatedCodeEditor({
  language,
  code,
}: UpdatedCodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-3">
        <span className="text-sm font-medium capitalize text-slate-300">
          {language}
        </span>

        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:bg-slate-700"
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ children }) {
            return (
              <SyntaxHighlighter
                language={language.toLowerCase()}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  padding: "24px",
                  background: "#0f172a",
                  fontSize: "14px",
                }}
                wrapLongLines
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {`\`\`\`${language}
${code}
\`\`\``}
      </ReactMarkdown>
    </div>
  );
}
