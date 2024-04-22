/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  id?: string;
  maxDate?: any;
}
export default function ReactDateSelect({
  id = "",
  className = "",
  value = "",
  label = "",
  touched = false,
  error,
  required,
  onChange,
  width,
  disabled,
  labelStyle,
  maxDate,
  ...props
}: InputProps) {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={`${width} w-full`}>
      {/* <pre className=""> {JSON.stringify(maxDate)}</pre> */}
      {label ? (
        <div className={`${labelStyle} font-medium text-sm mb-1`}>
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <DatePicker
        id={id}
        className={`${className} w-full p-4 transition-all outline-none bg-transparent border rounded-[8px] 
      border-grey-dark focus:border-primary disabled:text-placeholder 
      placeholder:text-placeholder text-ellipsis text-sm text-black`}
        // toggleCalendarOnIconClick
        selected={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyy"
        scrollableYearDropdown
        showYearDropdown
        maxDate={maxDate ? new Date(maxDate) : null}
      />
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
