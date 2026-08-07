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
      <div className="overflow-hidden rounded-b-2xl">
        <Editor
          height="400px"
          width="100%"
          defaultLanguage={editorLanguage}
          defaultValue={code}
          language={editorLanguage}
          value={code}
          onChange={(value) => onChange(value || "")}
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 15,
            fontLigatures: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: "on",
            tabSize: 2,
            padding: {
              top: 20,
            },
            roundedSelection: true,
            smoothScrolling: true,
            cursorBlinking: "smooth",
            renderLineHighlight: "all",
          }}
        />
      </div>
    </div>
  );
}
