/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type FormDivPropTypes = {
  ref?: any;
  title?: string;
  children?: any;
};

export default function FormDiv({ ref, title, children }: FormDivPropTypes) {
  return (
    <div ref={ref} className="flex flex-col w-full gap-10">
      <div className="w-full border border-[#EFEFEF] bg-white p-8 rounded-lg flex flex-col gap-10">
        <span className="text-black font-medium text-[18px]">{title}</span>
        {children}
      </div>
    </div>
  );
}
