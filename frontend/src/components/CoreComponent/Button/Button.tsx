import { Loader2 } from "lucide-react";
import { ButtonProps } from "./Button.types";

const variantStyles = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-slate-700 text-white",
  outline: "border border-slate-600",
  danger: "bg-red-600 text-white",
};

const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}${disabled ? " opacity-50 cursor-not-allowed" : ""}
      `}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
