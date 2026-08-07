import { Upload } from "lucide-react";
import { useState } from "react";

interface FileUploadButtonProps {
  onFileSelect: (file: File) => void;
  onFilenameChange: (name: string) => void;
}

export default function FileUploadButton({
  onFileSelect,
  onFilenameChange,
}: FileUploadButtonProps) {
  const [filename, setFilename] = useState("");

  return (
    <>
      <input
        id="code-upload"
        type="file"
        accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c,.cs,.go,.rs"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          setFilename(file.name);
          onFilenameChange(file.name);
          onFileSelect(file);
        }}
      />

      <label
        htmlFor="code-upload"
        className="
          flex
          cursor-pointer
          items-center
          gap-2
          rounded-lg
          border
          border-slate-700
          px-4
          py-2
          text-sm
          text-slate-300
          transition
          hover:bg-slate-800
        "
      >
        <Upload size={16} />
        Upload
      </label>
    </>
  );
}
