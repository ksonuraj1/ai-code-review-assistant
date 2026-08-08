import UpdatedCodeHeader from "./UpdatedCodeHeader";

import { ReviewUpdatedCodeProps } from "./ReviewUpdatedCode.types";
import Card from "@/src/components/CoreComponent/Card";
import UpdatedCodeEditor from "./UpdatedCodeEditor";

export default function ReviewUpdatedCode({
  language,
  updatedCode,
}: ReviewUpdatedCodeProps) {
  if (!updatedCode) return null;

  return (
    <Card className="mt-6 overflow-hidden p-0">
      <UpdatedCodeHeader
        language={language}
        onCopy={() => {}}
        onDownload={() => {}}
        onExpand={() => {}}
      />

      <UpdatedCodeEditor language={language} code={updatedCode} />
    </Card>
  );
}
