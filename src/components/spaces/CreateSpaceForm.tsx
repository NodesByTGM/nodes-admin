/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Button,
  Input,
  TextArea,
  LabeledSelect,
  FormDebug,
  CollaboratorInput,
} from "../../components";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import AppConfig from "../../utilities/config";
import { spaceSchema, spaceValidationType } from "../../utilities/validation";
import { MdCancel } from "react-icons/md";
import { useFormik, FormikProvider, FieldArray } from "formik";

export function AddRuleInputDiv({ children }) {
  return (
    <div className="w-full flex flex-col gap-[10px] p-4 rounded-[5px] border border-[#D6D6D6]">
      {children}
    </div>
  );
}

export default function CreateSpaceForm({ closeModal }) {
  const [categoryOptions] = useState([
    { id: 1, name: "Full time", value: 0, returnValue: "FullTime" },
    { id: 2, name: "Part time", value: 1, returnValue: "PartTime" },
    { id: 3, name: "Contract", value: 3, returnValue: "Contract" },
  ]);

  const handleClickForm = (values?: any) => {
    console.log(JSON.stringify(values, null, 2));
  };
  const initialRule = {
    title: "",
    description: "",
    ruleTitle: "",
  };
  const formik = useFormik<spaceValidationType>({
    initialValues: {
      name: "",
      category: "",
      description: "",

      rules: [initialRule],
    },
    validationSchema: spaceSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    setFieldValue,
    // setValues,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;
  return (
    <div>
      <FormDebug form={{ values, errors, touched }} className="hidden" />

      <FormikProvider value={formik}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-between items-center">
            <span className="text-[20px] font-medium text-[#000000]">
              Create a new space
            </span>

            <MdCancel
              onClick={() => closeModal()}
              className={"text-primary cursor-pointer size-6"}
            />
          </div>
          <div className="w-full">
            <Input
              labelStyle="!text-base"
              placeholder={AppConfig.PLACEHOLDERS.SpaceName}
              id="name"
              label="Name of space"
              error={errors.name}
              value={values.name}
              touched={touched.name}
              onChange={handleChange("name")}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-base ">Category</span>
            <LabeledSelect
              paddingy="py-[16px]"
              defaultValue={values.category}
              options={categoryOptions}
              onChange={(value) => {
                setFieldValue("category", value.value);
              }}
            />
          </div>

          <div className="w-full">
            <TextArea
              labelStyle="!text-base"
              required
              placeholder={AppConfig.PLACEHOLDERS.SpaceDescription}
              id="description"
              label="Description"
              error={errors.description}
              value={values.description}
              touched={touched.description}
              onChange={handleChange("description")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex gap-[5px] text-base text-[#000000]">
            <span className="font-medium">Rules of the space</span>
            <span className="font-normal">
              Please, list out some rules for the space
            </span>
          </div>

          <div className="">
            <FieldArray
              name="rules"
              render={(arrayHelpers) => (
                <div className="w-full flex flex-col gap-6">
                  {values.rules.map((rule, index) => (
                    <div
                      key={rule?.title + String(index)}
                      className="flex items-center gap-6"
                    >
                      <div className="rounded-full font-normal text-xs text-[#757575] h-6 w-6 border border-[#D6D6D6] flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div className="flex flex-1">
                        <AddRuleInputDiv>
                          <CollaboratorInput
                            id={`rules[${index}].ruleTitle`}
                            name={`rules[${index}].ruleTitle`}
                            value={values.rules[index].ruleTitle}
                            onChange={handleChange}
                            placeholder="Title"
                            textSize="text-base"
                          />
                          <CollaboratorInput
                            id={`rules[${index}].description`}
                            name={`rules[${index}].description`}
                            value={values.rules[index].description}
                            onChange={handleChange}
                            placeholder="description"
                            textSize="text-xs"
                          />
                        </AddRuleInputDiv>
                      </div>
                      {values.rules?.length > 1 && (
                        <span
                          onClick={() => arrayHelpers.remove(index)}
                          className="text-primary"
                        >
                          <FaTimes />
                        </span>
                      )}
                    </div>
                  ))}
                  <div
                    onClick={() => arrayHelpers.push(initialRule)}
                    className="cursor-pointer flex items-center gap-6 mb-[16px]"
                  >
                    <div className="rounded-full bg-customsecondary font-normal text-xs text-white h-6 w-6   flex items-center justify-center">
                      <FaPlus />
                    </div>
                    <span className="text-primary font-normal text-base">
                      Add another rule
                    </span>
                  </div>
                </div>
              )}
            />
          </div>

          <Button
            type="submit"
            isLoading={false}
            className={`${!isValid ? "opacity-50" : ""} `}
            disabled={!isValid}
          >
            Create space
          </Button>
        </form>
      </FormikProvider>
    </div>
  );
}
