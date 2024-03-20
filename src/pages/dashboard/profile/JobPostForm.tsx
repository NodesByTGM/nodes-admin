/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import {
  Button,
  Input,
  TextArea,
  FormDebug,
  LabeledSelect,
  TagInput,
} from "../../../components";
import AppConfig from "../../../utilities/config";
import { useFormik, FormikProvider } from "formik";
import { jobSchema, jobValidationType } from "../../../utilities/validation";
import { useCreateJobMutation } from "../../../api";
import { toast } from "react-toastify";

export default function JobPostForm({ closeModal, refetchAllJobs = () => {} }) {
  const [
    createJob,
    {
      isLoading: createJobLoading,
      isSuccess: createJobSuccess,
      isError: createJobIsError,
      //   error: createJobError,
    },
  ] = useCreateJobMutation();

  const [options] = useState([
    { id: 1, name: "Full time", value: 0 },
    { id: 2, name: "Part time", value: 1 },
    { id: 3, name: "Contract", value: 3 },
  ]);

  const handleClickForm = (values?: any) => {
    const data = {
      name: values.name,
      description: values.description,
      experience: values.experience,
      payRate: values.payRate,
      workRate: values.workRate,
      skills: values.skills,
      jobType: values.jobType,
    };
    console.log(JSON.stringify(data, null, 2));
    createJob(data);
  };

  const formik = useFormik<jobValidationType>({
    initialValues: {
      name: "",
      description: "",
      hoursPerWeek: 0,
      location: "",
      experience: "",
      payRate: 0,
      workRate: "",
      skills: [],
      jobType: 0,
    },
    validationSchema: jobSchema,
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

  useEffect(() => {
    if (createJobSuccess) {
      toast.success("Successfully created job");
      refetchAllJobs();
      closeModal();
    }
  }, [createJobSuccess]);

  useEffect(() => {
    if (createJobIsError) {
      toast.error("Something went wrong");
      closeModal();
    }
  }, [createJobIsError]);

  return (
    <div className={`text-[#000000]`}>
      <div className="flex items-center justify-between mb-[32px]">
        <span className="">Create a Job Post</span>

        <div
          onClick={() => closeModal()}
          className="cursor-pointer text-primary text-[16px]"
        >
          <MdCancel />
        </div>
      </div>

      <FormDebug
        form={{
          values,
          errors,
          touched,
          isValid,
        }}
        className="hidden"
      />
      <FormikProvider value={formik}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-6"
        >
          <div className="w-full">
            <Input
              labelStyle="!text-base"
              required
              placeholder={AppConfig.PLACEHOLDERS.JobTitle}
              id="name"
              label="Job Title"
              error={errors.name}
              value={values.name}
              touched={touched.name}
              onChange={handleChange("name")}
              onBlur={handleBlur}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <Input
                labelStyle="!text-base"
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="hoursPerWeek"
                label="Hours required per week"
                error={errors.hoursPerWeek}
                value={values.hoursPerWeek}
                touched={touched.hoursPerWeek}
                onChange={handleChange("hoursPerWeek")}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                labelStyle="!text-base"
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="payRate"
                label="Rate per hour"
                error={errors.payRate}
                value={values.payRate}
                touched={touched.payRate}
                onChange={handleChange("payRate")}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="w-full">
            <Input
              labelStyle="!text-base"
              required
              placeholder={AppConfig.PLACEHOLDERS.JobTitle}
              id="experience"
              label="Experience"
              error={errors.experience}
              value={values.experience}
              touched={touched.experience}
              onChange={handleChange("experience")}
              onBlur={handleBlur}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <Input
                labelStyle="!text-base"
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="workRate"
                label="Rate per week"
                error={errors.workRate}
                value={values.workRate}
                touched={touched.workRate}
                onChange={handleChange("workRate")}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                labelStyle="!text-base"
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="location"
                label="Location"
                error={errors.location}
                value={values.location}
                touched={touched.location}
                onChange={handleChange("location")}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-base ">Job Type</span>
            <LabeledSelect
              paddingy="py-[16px]"
              defaultValue={values.jobType}
              options={options}
              onChange={(value) => setFieldValue("jobType", value.value)}
            />
          </div>
          <div className="w-full">
            <TextArea
              labelStyle="!text-base"
              required
              placeholder={AppConfig.PLACEHOLDERS.JobDescription}
              id="description"
              label="Description"
              error={errors.description}
              value={values.description}
              touched={touched.description}
              onChange={handleChange("description")}
              onBlur={handleBlur}
            />
          </div>

          <TagInput
            id="skills"
            onSelect={() => {}}
            options={AppConfig.SKILL_OPTIONS}
            description="Example: Modelling, Video editing"
            tags={values.skills}
            setTags={(value) => setFieldValue("skills", value)}
          />
          <Button
            type="submit"
            isLoading={createJobLoading}
            className={`${!isValid ? "opacity-50" : ""} `}
            disabled={!isValid}
          >
            Create job posting
          </Button>
        </form>
      </FormikProvider>
    </div>
  );
}
