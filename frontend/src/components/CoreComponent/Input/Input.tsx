import { InputProps } from "./Input.types";

export default function Input({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`w-full rounded-2xl border border-slate-800 bg-slate-900 py-2 px-4 focus:border-slate-500 ${className}`}
        {...props}
      />
      {helperText && !error && <p className="mt-1 text-sm">{helperText}</p>}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
