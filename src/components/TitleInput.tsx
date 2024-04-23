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
        <div className={`${labelStyle} font-medium text-sm mb-1`}>
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <input
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`w-full p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-none placeholder:text-[#757575] placeholder:text-[24px] placeholder:font-medium  
        text-ellipsis text-[24px] text-black ${className} `}
        {...props}
      />
      {description ? <div className="my-2 text-sm">{description}</div> : null}
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
