/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { Button, Input, TextArea, FormDebug, LabeledSelect, TagInput } from "../components";
import AppConfig from "../utilities/config";
import { useFormik, FormikProvider } from "formik";
import { jobSchema, jobValidationType } from "../utilities/validation";
import { useCreateJobMutation, useEditJobMutation } from "../api";
import { toast } from "react-toastify";

type IJobPostForm = {
  closeModal: () => void;
  refetchAllJobs?: () => void;
  details?: any;
};

export default function JobPostForm({
  closeModal,
  refetchAllJobs = () => {},
  details,
}: IJobPostForm) {
  const [
    createJob,
    {
      isLoading: createJobLoading,
      isSuccess: createJobSuccess,
      isError: createJobIsError,
      error: createJobError,
    },
  ] = useCreateJobMutation();

  const [
    editJob,
    {
      isLoading: editJobLoading,
      isSuccess: editJobSuccess,
      isError: editJobIsError,
      error: editJobError,
    },
  ] = useEditJobMutation();

  const [jobOptions] = useState([
    { id: 1, name: "Full time", value: 0, returnValue: "FullTime" },
    { id: 2, name: "Part time", value: 1, returnValue: "PartTime" },
    { id: 3, name: "Contract", value: 2, returnValue: "Contract" },
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
    // console.log(JSON.stringify(data, null, 2));
    if (details) {
      // console.log(JSON.stringify({ ...details, ...data }, null, 2));
      
      editJob({ ...details, ...data });
    } else {
      createJob(data);
    }
  };

  const formik = useFormik<jobValidationType>({
    initialValues: {
      name: "",
      description: "",
      experience: "",
      payRate: 0,
      workRate: "",
      skills: [],
      jobType: 0,
      hoursPerWeek: 0,
      location: "",
    },
    validationSchema: jobSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    setFieldValue,
    setValues,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  const handleFormPopulation = () => {
    const data = {
      name: details.name,
      description: details.description,
      experience: details.experience,
      payRate: details.payRate,
      workRate: details.workRate,
      skills: details.skills,
      jobType:
        jobOptions.find(
          (option) =>
            option?.returnValue.toLowerCase() ===
            details?.jobType?.toLowerCase()
        )?.value || 0,
    };
    setValues({ ...data, hoursPerWeek: 0, location: "" });
  };

  useEffect(() => {
    if (createJobSuccess) {
      toast.success("Successfully created job");
      refetchAllJobs();
      closeModal();
    }
  }, [createJobSuccess]);
  useEffect(() => {
    if (editJobSuccess) {
      toast.success("Successfully edited job");
      refetchAllJobs();
      closeModal();
    }
  }, [editJobSuccess]);

  useEffect(() => {
    if (details) {
      handleFormPopulation();
    }
  }, [details]);

  useEffect(() => {
    if (createJobIsError) {
      toast.error(createJobError?.message?.message || "Something went wrong");
      closeModal();
    }
  }, [createJobIsError, createJobError]);
  
  useEffect(() => {
    if (editJobIsError) {
      toast.error(createJobError?.message?.message || "Something went wrong");
      closeModal();
    }
  }, [editJobIsError, editJobError]);

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
          details,
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
                placeholder={AppConfig.PLACEHOLDERS.Location}
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
              options={jobOptions}
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
            isLoading={createJobLoading || editJobLoading}
            className={`${!isValid ? "opacity-50" : ""} `}
            disabled={!isValid}
          >
            {details ? (
              <span className=""> Edit job posting</span>
            ) : (
              <span className=""> Create job posting</span>
            )}
          </Button>
        </form>
      </FormikProvider>
    </div>
  );
}
