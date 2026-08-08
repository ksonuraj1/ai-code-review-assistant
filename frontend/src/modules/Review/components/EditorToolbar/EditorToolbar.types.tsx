import { DropdownOption } from "@/src/components/CoreComponent/Dropdown";

export interface EditorToolbarProps {
  language: string;
  languageOptions: DropdownOption[];
  onLanguageChange: (value: string) => void;
  onFilenameChange: (name: string) => void;
  onFileSelect: (file: File) => void;
  onClear: () => void;
}
