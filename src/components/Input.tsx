import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
  width?: string;
  disabled?: boolean;
  labelStyle?: string;
}
export default function Input({
  className = "",
  value = "",
  label = "",
  description = "",
  touched = false,
  error,
  required,
  onChange,
  width,
  disabled,
  labelStyle,
  ...props
}: InputProps) {
  return (
    <div className={`${width}`}>
      {label ? (
        <div className={`${labelStyle} font-medium text-base mb-1`}>
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <input
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`w-full p-4 transition-all outline-none bg-transparent border rounded-[8px] 
        border-[#D6D6D6] focus:border-primary disabled:text-placeholder placeholder:text-[#757575] placeholder:font-normal placeholder:text-base
         text-ellipsis text-sm text-black ${className} `}
        {...props}
      />
      {description ? <div className="my-2 text-sm">{description}</div> : null}
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
