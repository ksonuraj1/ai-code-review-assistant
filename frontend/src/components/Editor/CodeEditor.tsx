"use client";

import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
}

const languageMap: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  Java: "java",
  "C#": "csharp",
  Go: "go",
  Ruby: "ruby",
  PHP: "php",
  Swift: "swift",
  Kotlin: "kotlin",
};

export default function CodeEditor({
  code,
  language,
  onChange,
}: CodeEditorProps) {
  const editorLanguage = languageMap[language] || language.toLowerCase();

  return (
    <div className="space-y-6">
      <div className="gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          {/* <label className="mb-2 block text-sm font-medium text-slate-700">
            Language
          </label>
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            {language}
          </p> */}
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50 shadow-sm">
        <Editor
          height="300px"
          width="100%"
          language={editorLanguage}
          value={code}
          onChange={(value) => onChange(value || "")}
          theme="vs-light"
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 15,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            quickSuggestions: {
              other: true,
              comments: false,
              strings: true,
            },
            suggestOnTriggerCharacters: true,
            parameterHints: {
              enabled: true,
            },
            tabCompletion: "on",
            suggestSelection: "first",
          }}
        />
      </div>
    </div>
  );
}
