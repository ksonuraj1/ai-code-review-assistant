import Button from "@/src/components/CoreComponent/Button";

interface QuickPromptProps {
  label: string;
  onClick: () => void;
}

export default function QuickPrompt({ label, onClick }: QuickPromptProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={onClick}
      className="rounded-full"
    >
      {label}
    </Button>
  );
}
