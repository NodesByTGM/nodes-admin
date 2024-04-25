import React from "react";
import { Spinner } from "@material-tailwind/react";
type ILoaderProps = {
  spinner?: boolean;
  className?: string;
  color?: string
};

export default function Loader({ spinner = true, className="size-14 mx-auto", color='text-primary/50' }: ILoaderProps) {
  return (
    <div>
      {spinner && (
        <div className={`${className}`}>
          <Spinner className={`h-full w-full ${color} animate-spin ease-linear`} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </div>
      )}
    </div>
  );
}
