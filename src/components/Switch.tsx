// import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Switchcomponent({
  value,
  setValue,
  color,
}: {
  value: boolean;
  setValue: (e) => void;
  color?: string;
}) {
  return (
    <Switch
      checked={value}
      onChange={setValue}
      className={classNames(
        value ? "bg-customsecondary" : "bg-gray-300",
        "relative inline-flex h-6 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none  focus:ring-0 focus:ring-offset-2",
        `${color}`
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          value ? "translate-x-3" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
}
