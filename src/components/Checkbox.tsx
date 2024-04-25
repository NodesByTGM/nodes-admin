import clsx from "clsx";
import { CheckboxProps } from "../interfaces";

const themeKVP = {
  primary: "border-primary",
  nodes: "boder-nodes",
};
export default function CheckBox(props: CheckboxProps) {
  const {
    checked,
    setChecked,
    className,
    theme = "primary",
    size = "default",
  } = props;

  return (
    <div
      className={clsx(
        "rounded-[2px] cursor-pointer border",
        checked ? themeKVP[theme] : "border-grey-dark",
        size === "default" ? "w-4 h-4" : "h-5 w-5",
        className
      )}
      onClick={() => setChecked(!checked)}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`text-${theme}`}
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </div>
  );
}
