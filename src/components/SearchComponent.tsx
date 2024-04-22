import React from "react";

export default function SearchComponent({
  padding = "py-[9px] pl-4",
  placeholder = "Search",
  onChange=() => {}
}: {
  padding?: string;
  placeholder?: string;
  onChange?: (e) => void 
}) {
  return (
    <div className={"w-full  relative h-full"}>
      <div className="w-full relative h-full">
        <input
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          className={`${padding} h-full ring-0 focus:border-primary outline-none   w-full border text-base  rounded-[5px] border-[#D6D6D6] placeholder:text-[#757575]`}
        />
      </div>{" "}
    </div>
  );
}
