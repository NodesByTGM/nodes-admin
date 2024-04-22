/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type IProps = {
  label?: string;
  options: Array<any>;
};

export default function BorderlessSelect({ label, options }: IProps) {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="">
      <div className="">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="flex gap-4 items-center">
                {/* {label && (
                  <Listbox.Label className="text-[#000000] text-sm font-medium">
                    {label}
                  </Listbox.Label>
                )} */}
                <div className="relative ">
                  <Listbox.Button className=" flex items-center justify-between  gap-[10px] relative w-full cursor-default rounded-md  py-[12px] px-4 text-left text-primary  ring-0 ring-inset  focus:outline-none focus:ring-0 sm:text-base ">
                    <span className="block truncate">
                      {selected?.name ? selected?.name : label}
                    </span>
                    <span className="text-primary">
                      <IoIosArrowDown />
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
                                {option.name}
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
    </div>
  );
}
