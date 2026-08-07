import { SpinnerProps } from "./Spinner.types";

const sizeStyles = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export default function Spinner({
  size = "md",
  className = "",
  ...props
}: SpinnerProps) {
  return (
    <span
      className={`
        inline-block
        animate-spin
        rounded-full
        border-2
        border-current
        border-t-transparent
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    />
  );
}
