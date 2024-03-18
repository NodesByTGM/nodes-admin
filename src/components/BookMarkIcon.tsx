import React, { useState } from "react";


const PrimaryFill = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="#0C5C56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.3337 49L28.0003 37.3333L11.667 49V11.6667C11.667 10.429 12.1587 9.242 13.0338 8.36683C13.909 7.49167 15.096 7 16.3337 7H39.667C40.9047 7 42.0917 7.49167 42.9668 8.36683C43.842 9.242 44.3337 10.429 44.3337 11.6667V49Z"
        stroke="#0C5C56"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const PrimaryStroke = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.3337 49L28.0003 37.3333L11.667 49V11.6667C11.667 10.429 12.1587 9.242 13.0338 8.36683C13.909 7.49167 15.096 7 16.3337 7H39.667C40.9047 7 42.0917 7.49167 42.9668 8.36683C43.842 9.242 44.3337 10.429 44.3337 11.6667V49Z"
        stroke="#0C5C56"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default function BookMarkIcon() {
  const [active, setActive] = useState(false);
  return (
    <div className="cursor-pointer">
      {active ? (
        <div onClick={() => setActive(false)} className="text-[56px]">
          <PrimaryFill />
        </div>
      ) : (
        <div onClick={() => setActive(true)} className="text-[56px]">
          <PrimaryStroke />
        </div>
      )}
    </div>
  );
}
