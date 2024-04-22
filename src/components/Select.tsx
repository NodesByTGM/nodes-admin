/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";
// import { CarretDownBoldIcon } from "../assets/svg"

interface IOption {
  value: any;
  label: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  handleBlur?: any;
  onSelect?: ({ id, value }: { id: string; value: string }) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  searchable?: boolean;
  options?: IOption[];
  error?: any;
  touched?: boolean;
  defaultValue?: any;
  optionType?: "values" | "objects";
  padding?: string;
  showCarret?: boolean;
}

function Select({
  className = "",
  label = "",
  onSelect = () => {},
  handleBlur = () => {},
  id = "",
  placeholder = "",
  // required = false,
  options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
  ],
  error,
  //   touched = false,
  defaultValue,
  searchable = false,
  showCarret,
}: SelectProps) {
  const wrapperRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const [opened, setOpened] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState<IOption>({
    value: "",
    label: placeholder,
  });
  const [touched, setTouched] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(options);

  const handleSelect = (value: { value: any; label: string }) => {
    setSelected(value);
    setOpened(false);
  };

  const handleInputChange = (e: any) => {
    setOpened(true);
    setInputValue(e.target.value);
  };

  const handleClickOutside = (event: any) => {
    console.log("blur");
    setTouched(true);
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsFocused(false);
      setOpened(false);
    }
  };

  const handleInputKeyDown = () => {
    inputRef.current?.focus();
  };

  const toggleMenu = () => {
    setOpened(!opened);
    setIsFocused(true);
  };

  useEffect(() => {
    if (selected.label !== "Select") {
      onSelect({ id, value: selected.value });
      setIsFocused(false);
    }
  }, [selected]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (defaultValue != undefined) {
      const value = options.find((x) => x.value === defaultValue);
      console.log(value);
      if (value) {
        setSelected(value);
      }
    }
  }, [defaultValue]);

  useEffect(() => {
    setFiltered(
      options.filter((x) =>
        x.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);

  return (
    <div
      className={`group relative ${className}`}
      onClick={toggleMenu}
      ref={wrapperRef}
    >
      <div className="font-medium text-sm mb-1 hidden">{label}</div>
      <div
        className={clsx(
          `flex justify-between items-center p-4- p-3.5 bg-transparent border border-grey-dark focus-visible:border-primary rounded-[5px]`,
          `text-black text-sm transition-all cursor-pointer`,
          isFocused ? "border-primary" : ""
        )}
      >
        <div
          className={selected.label === placeholder ? "text-placeholder" : ""}
        >
          {selected.label}
        </div>

        {showCarret ? (
          <div className={clsx("transition-all", opened ? "rotate-180" : "")}>
            <ChevronDown className="text-grey-dark" />
          </div>
        ) : null}
      </div>

      {opened ? (
        <div
          className="mt-2 border border-primary rounded-[5px] relatve z-10 absolute w-full bg-white overflow-auto max-h-[280px]"
          onKeyDown={handleInputKeyDown}
        >
          {searchable ? (
            <div className="p-2">
              <input
                onBlur={handleBlur}
                id={id}
                type="text"
                value={inputValue}
                autoFocus
                ref={inputRef}
                onChange={handleInputChange}
                placeholder="Search"
                className={`p-2 outline-none py-2 w-full border rounded-lg`}
              />
            </div>
          ) : null}
          <ul>
            {filtered.map((v, i: number) => (
              <li
                key={i}
                className="p-3 hover:bg-customsecondary-light-hover cursor-pointer transition-all"
                onClick={() => handleSelect(v)}
              >
                {v.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {touched && error && !selected?.value ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}

export default Select;
