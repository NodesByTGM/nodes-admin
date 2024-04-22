/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../assets/svg";
// import React, { useMemo } from 'react';

interface TagInputProps {
  description?: string;
  placeholder?: string;
  options?: string[];
  max?: number;
  id: string;
  onSelect: (e?: any) => void;
  tags?: Array<any>;
  setTags?: (e) => void;
}

const TagInput = ({
  id,
  placeholder = "Add up to 3 skills",
  max = 3,
  onSelect,
  description = "",
  options = [],
  tags = [],
  setTags = () => {},
}: TagInputProps) => {
  // const [tags, setTags] = useState<any>([]);

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [suggestions, setSuggestions] = useState(options);

  const wrapperRef = useRef<any>(null);
  const optionsRef = useRef<any>([]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: any) => {
    // if (tags.length < max && e.key === 'Enter' && inputValue.trim() !== '') {
    //     setTags([...tags, inputValue.trim()]);
    //     setInputValue('');
    // }
    if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      // Remove the last tag when backspace is pressed and input is empty
      setTags(tags.slice(0, tags.length - 1));
    }
  };
  const handleSelect = (item: any) => {
    if (tags.length < max && !tags.includes(item)) {
      setTags([...tags, item]);
      setIsFocused(false);
    }
  };

  // const handleKeyDown = (e: any) => {
  //     const renderedCount = suggestions.filter((x: any) => !tags.includes(x)).length - 1
  //     if (e.key === 'ArrowDown' && currentIndex < renderedCount) {
  //         // Remove the last tag when backspace is pressed and input is empty
  //         console.log(optionsRef.current[currentIndex])
  //         optionsRef.current[currentIndex]?.focus()
  //         setCurrentIndex(currentIndex + 1)
  //     } else if (e.key === 'ArrowUp' && currentIndex > 0) {
  //         // Remove the last tag when backspace is pressed and input is empty
  //         console.log(optionsRef.current[currentIndex])
  //         optionsRef.current[currentIndex]?.focus()
  //         setCurrentIndex(currentIndex - 1)
  //     }
  // }

  const getPlaceHolder = () => {
    if (tags.length > 0) {
      if (tags.length !== max) {
        return "Add another";
      }
      return "";
    }
    return placeholder;
  };

  const handleRemove = (item: any) => {
    setTags(tags.filter((x: any) => x !== item));
    setIsFocused(false);
  };

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsFocused(false);
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSuggestions(options.filter((x: string) => x.includes(inputValue)));
  }, [inputValue]);

  useEffect(() => {
    onSelect({ id, value: tags });
  }, [tags]);

  return (
    <div>
      <div
        className="relative border cursor-pointer border-grey-dark p-4 rounded-[5px] text-sm"
        ref={wrapperRef}
      >
        <div className="flex flex-wrap items-center gap-4">
          {tags.map((tag: any, index: number) => (
            <span
              key={index}
              className="py-[10px] border border-grey-dark items-center rounded-full px-4 w-max flex flex-wrap gap-[10px]"
            >
              <span>{tag}</span>
              <span onClick={() => handleRemove(tag)}>
                <CloseIcon />
              </span>
            </span>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onFocus={() => setIsFocused(true)}
            disabled={tags.length === max}
            placeholder={getPlaceHolder()}
            className={`p- outline-none py-2 placeholder:text-placeholder ${
              tags.length === 0 ? "w-full" : ""
            } disabled:bg-transparent`}
          />
        </div>

        {isFocused ? (
          <div className="max-h-[200px] overflow-y-auto mt-2 -ml-4 border border-primary rounded-[5px] relatve z-10 absolute w-full bg-white overflow-hidden">
            <ul>
              {suggestions
                .filter((x: any) => !tags.includes(x))
                .map((v: any, i: number) => (
                  <li
                    key={i}
                    className={
                      "p-3 hover:bg-customsecondary-light-hover cursor-pointer transition-all"
                    }
                    ref={(reference) => (optionsRef.current[i] = reference)}
                    onClick={() => handleSelect(v)}
                  >
                    {v}
                  </li>
                ))}
              {suggestions.length === 0 ? (
                <li className="p-3 hover:bg-customsecondary-light-hover cursor-pointer transition-all">
                  No item matches your search.
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>

      {description ? <div className="my-2 text-sm">{description}</div> : null}
    </div>
  );
};

export default TagInput;

{
  /* <li key={i}
    className={`p-3 hover:bg-customsecondary-light-hover cursor-pointer transition-all ${currentIndex === i ?  'bg-customsecondary-light-hover':''}`}
    ref={(reference) => (optionsRef.current[i] = reference)}
    onClick={() => handleSelect(v)}>{v}</li> */
}
