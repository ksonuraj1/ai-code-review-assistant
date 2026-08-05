"use client";

import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({
  code,
  language,
  onChange,
}: CodeEditorProps) {
  return (
    <div className="space-y-4">
      {/* Language */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Language
        </label>

        <p className="w-48 rounded-md border border-gray-300 bg-gray-100 px-3 py-2">
          {language}
        </p>
      </div>

      {/* Monaco Editor */}
      <Editor
        height="350px"
        width="90%"
        language={language.toLowerCase()}
        value={code}
        onChange={(value) => onChange(value || "")}
        theme="vs-light"
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}
