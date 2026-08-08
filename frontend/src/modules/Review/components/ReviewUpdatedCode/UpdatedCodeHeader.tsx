import Button from "@/src/components/CoreComponent/Button";
import { Copy, Download, Maximize2 } from "lucide-react";

interface UpdatedCodeHeaderProps {
  language: string;
  onCopy: () => void;
  onDownload: () => void;
  onExpand: () => void;
}

export default function UpdatedCodeHeader({
  language,
  onCopy,
  onDownload,
  onExpand,
}: UpdatedCodeHeaderProps) {
  return (
    <div className="flex items-center  justify-between border-b border-slate-700 px-6 py-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Updated Code</h2>

        <p className="mt-1 text-sm text-slate-400">
          AI generated improved implementation.
        </p>
      </div>
    </div>
  );
}
