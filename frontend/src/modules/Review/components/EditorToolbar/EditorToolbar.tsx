import Dropdown from "@/src/components/CoreComponent/Dropdown";
import { EditorToolbarProps } from "./EditorToolbar.types";
import FileUploadButton from "../Upload/FileUploadButton";
import Button from "@/src/components/CoreComponent/Button";
import { Trash2 } from "lucide-react";

export default function EditorToolbar({
  language,
  languageOptions,
  onLanguageChange,
  onFileSelect,
  onFilenameChange,
  onClear,
}: EditorToolbarProps) {
  return (
    <div className="space-y-6 border-b border-slate-800 pb-5">
      <div>
        <h2 className="text-2xl font-semibold text-white">Source Code</h2>

        <p className="mt-1 text-sm text-slate-400">
          Paste or upload code for AI review.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Dropdown
          className="bg-slate-700 bg-slate-700 border rounded-xl p-2"
          value={language}
          options={languageOptions}
          onChange={(e) => onLanguageChange(e.target.value)}
        />

        {/* Actions will come here */}
        <div className="flex items-center gap-2">
          <FileUploadButton
            onFileSelect={onFileSelect}
            onFilenameChange={onFilenameChange}
          />
        </div>

        <Button
          onClick={onClear}
          size="sm"
          variant="secondary"
          type="button"
          className="w-auto px-3"
        >
          <Trash2 size={20} />
          Clear
        </Button>
      </div>
    </div>
  );
}
