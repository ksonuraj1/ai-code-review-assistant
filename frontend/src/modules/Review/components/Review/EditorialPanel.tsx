import Card from "../../../../components/Card/Card";
import CodeEditor from "../Editor/CodeEditor";
import Button from "../../../../components/Button/Button";
import { Loader2 } from "lucide-react";
import FileUploadButton from "../Upload/FileUploadButton";
import Dropdown from "@/src/components/CoreComponent/Dropdown";
import { languageOptions } from "../../constants/constants.review";

interface EditorPanelProps {
  language: string;
  code: string;
  loading: boolean;
  onLanguageChange: (language: string) => void;
  onCodeChange: (value: string) => void;
  onReview: () => void;
  filename: string;
  onFilenameChange: (name: string) => void;
  onFileSelect: (file: File) => void;
}

function EditorPanel({
  language,
  code,
  loading,
  onLanguageChange,
  onCodeChange,
  onReview,
  filename,
  onFilenameChange,
  onFileSelect,
}: EditorPanelProps) {
  const characterCount = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(code.length);

  return (
    <Card className="flex h-full w-full flex-col overflow-hidden p-0">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 px-2 py-2">
        <h2 className="text-xl font-semibold text-white">Source Code</h2>
        {filename && (
          <p className="mt-1 text-sm text-slate-400">📄 {filename}</p>
        )}
        <FileUploadButton
          onFileSelect={onFileSelect}
          onFilenameChange={onFilenameChange}
        />
        <Dropdown
          options={languageOptions}
          value={language}
          onChange={(event) => onLanguageChange(event.target.value)}
          className="w-45 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none"
          aria-label="Select programming language"
        />
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-100 overflow-hidden">
        <CodeEditor code={code} language={language} onChange={onCodeChange} />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-700 px-6 py-4">
        <span className="text-sm text-slate-400">
          {characterCount} characters
        </span>

        <Button
          onClick={onReview}
          disabled={loading || code.trim() === ""}
          className="min-w-40"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Reviewing...
            </>
          ) : (
            "Review Code"
          )}
        </Button>
      </div>
    </Card>
  );
}

export default EditorPanel;
