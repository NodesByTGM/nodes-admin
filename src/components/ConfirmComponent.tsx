import React from "react";
import { Button } from ".";
type IDeleteComponent = {
  title?: string;
  text?: string;
  action: () => void;
  isLoading: boolean;
  closeModal: () => void;
};
export default function ConfirmComponent({
  title,
  text,
  action,
  isLoading,
  closeModal,
}: IDeleteComponent) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="font-medium text-[18px] text-[#000000]">{title}</span>
        <div onClick={() => closeModal()} className="cursor-pointer">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="24" height="24" rx="12" fill="#D9D9D9" />
            <path
              d="M16 8.5L8 16.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8.5L16 16.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <span className="font-normal text-base text-[#212121]">{text}</span>

      <div className="grid grid-cols-2 gap-4 mt-10">
        <div onClick={() => closeModal()} className="flex-1">
          <button className="border-[#EFEFEF] border h-full w-full outline-none focus:outline-nnone main-bg-gray rounded-lg">No, Cancel</button>
        </div>
        <div onClick={() => action()} className="flex-1">
          <Button
            isLoading={isLoading}
            className={`!bg-customprimary border-none text-[#ffffff] focus:text-[#ffffff]`}
          >
            Yes, Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
