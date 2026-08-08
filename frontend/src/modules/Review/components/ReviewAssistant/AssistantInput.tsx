import Button from "@/src/components/CoreComponent/Button";
import Input from "@/src/components/CoreComponent/Input";
import { SendHorizontal } from "lucide-react";

interface AssistantInputProps {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function AssistantInput({
  value,
  loading,
  onChange,
  onSubmit,
}: AssistantInputProps) {
  return (
    <div className="flex gap-3">
      <Input
        placeholder="Ask a question about this review..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <Button variant="primary" onClick={onSubmit} loading={loading}>
        <SendHorizontal size={18} />
      </Button>
    </div>
  );
}
