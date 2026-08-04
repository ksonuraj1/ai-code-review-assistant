import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
