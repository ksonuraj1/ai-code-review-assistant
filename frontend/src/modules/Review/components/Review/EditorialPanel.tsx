import Card from "../../../../components/Card/Card";
import CodeEditor from "../Editor/CodeEditor";
import Button from "../../../../components/Button/Button";
import { Loader2 } from "lucide-react";
import { languageOptions } from "../../constants/constants.review";
import EditorToolbar from "../EditorToolbar/EditorToolbar";

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
  onClear: () => void;
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
  onClear,
}: EditorPanelProps) {
  const characterCount = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(code.length);
  const lineCount = code ? code.split("\n").length : 0;
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden p-0">
      <EditorToolbar
        language={language}
        languageOptions={languageOptions}
        onLanguageChange={onLanguageChange}
        onFileSelect={onFileSelect}
        onFilenameChange={onFilenameChange}
        onClear={onClear}
      />
      <div className="flex-1 min-h-100 overflow-hidden">
        <CodeEditor code={code} language={language} onChange={onCodeChange} />
      </div>

      <div className="flex items-center justify-between border-t border-slate-700 px-6 py-4">
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span>{language}</span>
          <span>{lineCount} Lines</span>
          <span>{characterCount.toLocaleString()} Characters</span>
        </div>
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
