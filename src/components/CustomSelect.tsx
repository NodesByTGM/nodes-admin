/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type IProps = {
  label?: string;
  options: Array<any>;
  width?: string;
  paddingy?: string;
  error?: any;
  touched?: boolean;
  defaultValue?: any;
  onChange: (e) => void;
  isSort?: boolean;
};

export default function CustomSelect({
  label,
  options,
  width,
  paddingy,
  error,
  touched,
  defaultValue,
  onChange,
  isSort,
}: IProps) {
  const handlePrefill = () => {
    const defaultdata = options.find(
      (option) =>
        String(option?.name)?.toLowerCase() ==
        String(defaultValue)?.toLowerCase()
    );
    console.log("defaultValue: " + defaultValue);
    console.log("defaultdata: " + defaultdata?.name);

    if (!defaultdata) {
      return "";
    }

    return setSelected(defaultdata?.name);
  };
  const [selected, setSelected] = useState<any>(null);



  useEffect(() => {
    onChange(selected);
  }, [selected]);
  useEffect(() => {
    if(!selected && defaultValue){
      handlePrefill()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, defaultValue]);

  return (
    <div className={`${width}`}>
      <span onClick={() => handlePrefill()} className="hidden"></span>
      <div className="w-full">
        <Listbox value={selected} onChange={(e) => {
          setSelected(e?.name)
          // console.log(JSON.stringify(e))

        }}>
          {({ open }) => (
            <>
              <div className="flex gap-4 items-center w-full">
                {label && (
                  <Listbox.Label className="text-nowrap text-[#000000] text-sm font-medium">
                    {label}
                  </Listbox.Label>
                )}
                <div className="relative w-full">
                  <Listbox.Button
                    className={`${paddingy} border border-[#D6D6D6] flex items-center justify-between  gap-6 relative w-full cursor-default rounded-md bg-white px-4 py-[10.5px] text-left text-gray-900  ring-inset ring-primary outline-none ring-0 focus:outline-none focus:ring-[0.5px] sm:text-sm sm:leading-6`}
                  >
                    <span className="block truncate">
                      <span className="text-[#757575] mr-1">
                        {isSort ? "Sort by:" : ""}
                      </span>

                      {selected ? selected : <span className="text-gray-400">Select </span> }
                    </span>
                    <span className="">
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9207 0.180176H6.69072H1.08072C0.120725 0.180176 -0.359275 1.34018 0.320725 2.02018L5.50072 7.20018C6.33072 8.03018 7.68073 8.03018 8.51073 7.20018L10.4807 5.23018L13.6907 2.02018C14.3607 1.34018 13.8807 0.180176 12.9207 0.180176Z"
                          fill="#757575"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {options.map((option) => (
                        <Listbox.Option
                          key={option.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-customsecondary text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {option?.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-primary",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                ></span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            </>
          )}
        </Listbox>
      </div>
      {touched && error && !selected ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
