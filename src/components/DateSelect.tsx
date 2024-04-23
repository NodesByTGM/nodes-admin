import React, {
  InputHTMLAttributes,
  // useEffect, useState
} from "react";
// import moment from "moment";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
  width?: string;
  disabled?: boolean;
  labelStyle?: string;
  value?: string;
  min?: string;
  max?: string;
}
export default function DateSelect({
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
  min = "",
  max = "",
  ...props
}: InputProps) {
  // const [defaultVal, setDefaultVal] = useState('');
  // useEffect(() => {
  //   if (value) {
  //     setDefaultVal(moment(value).format("yyyy/mm/DD"));
  //   }
  // }, [value]);
  return (
    <div className={`${width}`}>
      {/* {defaultVal}
      {moment(value).format("yyyy/mm/DD")} */}
      {label ? (
        <div className={`${labelStyle} font-medium text-sm mb-1`}>
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <input
        type="date"
        id="date"
        min={min}
        max={max}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`w-full p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-grey-dark focus:border-primary disabled:text-placeholder 
        placeholder:text-placeholder text-ellipsis text-sm text-black ${className} `}
        {...props}
      />
      {description ? <div className="my-2 text-sm">{description}</div> : null}
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
