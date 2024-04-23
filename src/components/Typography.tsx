/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

const themeKVP = {
  primary: 'text-primary',
  dark: 'text-black',
}

export function Title({ children, className = "", theme = "dark", center = false }:
  {
    children: ReactNode | ReactNode[],
    className?: string,
    theme?: 'primary' | 'dark',
    center?: boolean
  }) {
  return (
    <div className={`font-semibold lg:text-[32px] text-2xl leading-10 mb-3
    ${center ? 'text-center' : ''} ${themeKVP[theme]} ${className}`}>
      {children}
    </div>
  );
}

export function SubTitle({ children, className = "" }: any) {
  return (
    <div className={`text-xl lg:text-[28px] leading-7 text-primary-faded  text-center lg:w-11/12 ${className}`}>
      {children}
    </div>
  );
}
