import React, { useState } from "react";
import { Button, RatingStar } from "../components";
import { X } from "react-feather";
import { toast } from "react-toastify";
export default function RateComponent({
  action = () => {},
  closeModal = () => {},
  isLoading,
}: {
  action: () => void;
  closeModal: () => void;
  isLoading: boolean;
}) {
  const [selectedRate, setSelectedRate] = useState(0);
  const handleSuccessfulRating = () => {
    toast.success("Success");
    closeModal();
  };
  return (
    <div>
      <div className="flex  flex-col">
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#D6D6D6]">
          <span className="text-primary font-medium text-[20px]">
            Leave a rating
          </span>
          <div onClick={() => closeModal()} className="cursor-pointer">
            <X />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-[50px] mb-[50px]">
          <span className="text-primary font-medium text-[20px]">
            Lorem ipsum dolor sit amet.
          </span>

          <span className="grid grid-cols-5 gap-8">
            <div onClick={() => setSelectedRate(1)} className="cursor-pointer">
              <RatingStar active={selectedRate >= 1} />
            </div>
            <div onClick={() => setSelectedRate(2)} className="cursor-pointer">
              <RatingStar active={selectedRate >= 2} />
            </div>
            <div onClick={() => setSelectedRate(3)} className="cursor-pointer">
              <RatingStar active={selectedRate >= 3} />
            </div>
            <div onClick={() => setSelectedRate(4)} className="cursor-pointer">
              <RatingStar active={selectedRate >= 4} />
            </div>
            <div onClick={() => setSelectedRate(5)} className="cursor-pointer">
              <RatingStar active={selectedRate >= 5} />
            </div>
          </span>
        </div>

        <Button
          className="max-w-max mx-auto px-12"
          isLoading={isLoading}
          onClick={() => {
            handleSuccessfulRating();
            action();
          }}
        >
          Rate
        </Button>
      </div>
    </div>
  );
}
