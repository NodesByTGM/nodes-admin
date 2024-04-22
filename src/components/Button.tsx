/* eslint-disable @typescript-eslint/no-explicit-any */
// import { spawn } from "child_process";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary" | "dark" | "nodes";
  children?: any;
  size?: "sm" | "default";
  className?: string;
  compact?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const themeKVP = {
  primary:
    "bg-primary border-primary text-white hover:border-secondary focus:text-secondary disabled:bg-primary-light-active disabled:border-primary-light-active",
  secondary:
    "bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:border-secondary focus:border-secondary disabled:border-primary-light-active disabled:text-primary-light-active",
  dark: "border-black bg-white text-black hover:bg-black hover:text-white ",
  nodes: "",
};

const sizeKVP = {
  default: "py-3 px-5",
  sm: "p-2 max-w-[100px] max-h-[36px]",
};

export default function Button({
  className = "",
  children,
  theme = "primary",
  compact,
  size = "default",
  disabled = false,
  isLoading,
  type = "submit",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className={clsx(
        "whitespace-nowrap rounded-[8px]",
        "outline-none transition-all border w-full ${}",
        "flex items-center gap-2 justify-center",
        themeKVP[theme],
        compact && size !== "sm" ? "max-w-[350px]" : "",
        sizeKVP[size],
        className
      )}
    >
      {isLoading ? (
        <span className="text-white animate-pulse">...Loading</span>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}
