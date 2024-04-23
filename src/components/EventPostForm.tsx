/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { Button, Input, TextArea, FormDebug, DateSelect } from ".";
import AppConfig from "../utilities/config";
import { useFormik, FormikProvider } from "formik";
import { eventSchema, eventValidationType } from "../utilities/validation";
import { useCreateEventMutation, useEditEventMutation } from "../api";
import { Check } from "react-feather";
import { toast } from "react-toastify";

type IEventPostForm = {
  closeModal: () => void;
  refetchEvents?: () => void;
  details?: any;
  isProfilePage?: boolean;
};

export default function EventPostForm({
  closeModal,
  refetchEvents = () => {},
  details,
  isProfilePage,
}: IEventPostForm) {
  const [
    createEvent,
    {
      isLoading: createEventLoading,
      isSuccess: createEventSuccess,
      isError: createEventIsError,
      error: creatEventError,
    },
  ] = useCreateEventMutation();

  const [
    editEvent,
    {
      isLoading: editEventLoading,
      isSuccess: editEventSuccess,
      isError: editEventIsError,
      error: editEventError,
    },
  ] = useEditEventMutation();

  const handleClickForm = (values?: any) => {
    const data = {
      name: values.name,
      description: values.description,
      location: values.location,
      dateTime: values.dateTime,
      paymentType: values.paymentType,
      thumbnail: {
        id: "",
        url: "",
      },
    };
    // console.log(JSON.stringify(data, null, 2));
    if (details) {
      // console.log(JSON.stringify({ ...details, ...data }, null, 2));

      editEvent({ ...details, ...data });
    } else {
      createEvent(data);
    }
  };

  const formik = useFormik<eventValidationType>({
    initialValues: {
      name: "",
      description: "",
      location: "",
      dateTime: "",
      paymentType: "free",
      thumbnail: {
        id: "",
        url: "",
      },
    },
    validationSchema: eventSchema,
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
      location: details.location,
      dateTime: details.dateTime,
      paymentType: details.paymentType,
      thumbnail: {
        id: "string",
        url: "string",
      },
    };
    setValues({ ...data });
  };

  useEffect(() => {
    if (createEventSuccess) {
      toast.success("Successfully created event");
      refetchEvents();
      closeModal();
    }
  }, [createEventSuccess]);
  useEffect(() => {
    if (editEventSuccess) {
      toast.success("Successfully edited event");
      refetchEvents();
      closeModal();
    }
  }, [editEventSuccess]);

  useEffect(() => {
    if (details) {
      handleFormPopulation();
    }
  }, [details]);

  useEffect(() => {
    if (createEventIsError) {
      toast.error(creatEventError?.message?.message || "Something went wrong");
      closeModal();
    }
  }, [createEventIsError, creatEventError]);

  useEffect(() => {
    if (editEventIsError) {
      toast.error(creatEventError?.message?.message || "Something went wrong");
      closeModal();
    }
  }, [editEventIsError, editEventError]);

  return (
    <div className={`text-[#000000]`}>
      <div
        className={`${
          isProfilePage ? "hidden" : ""
        } flex items-center justify-between mb-[32px]`}
      >
        <span className="">Create an event</span>

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
              label="Name of event"
              error={errors.name}
              value={values.name}
              touched={touched.name}
              onChange={handleChange("name")}
              onBlur={handleBlur}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="w-full col-span-2">
              <DateSelect
                labelStyle="!text-base"
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="dateTime"
                label="Date of event"
                error={errors.dateTime}
                value={values.dateTime}
                touched={touched.dateTime}
                onChange={handleChange("dateTime")}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full hidden">
              <Input
                labelStyle="!text-base"
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="dateTime"
                label="Time of event"
                error={errors.dateTime}
                value={values.dateTime}
                touched={touched.dateTime}
                onChange={handleChange("dateTime")}
                onBlur={handleBlur}
              />
            </div>
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

          <div className="flex flex-col gap-2">
            <span className="font-medium text-base text-[#000000]">
              Event Type
            </span>

            <div className="flex gap-4">
              <div
                onClick={() => setFieldValue("paymentType", "free")}
                className={`cursor-pointer flex items-center gap-2`}
              >
                <div
                  className={`${
                    values?.paymentType.toLowerCase() == "free"
                      ? "bg-customsecondary text-white"
                      : "bg-white"
                  }  size-5 rounded-sm border flex items-center justify-center `}
                >
                  <Check className="size-4" />
                </div>
                <span className="font-normal text-sm text-[#000000]">Free</span>
              </div>

              <div
                onClick={() => setFieldValue("paymentType", "paid")}
                className={` cursor-pointer flex items-center gap-2`}
              >
                <div
                  className={`${
                    values?.paymentType.toLowerCase() == "paid"
                      ? "bg-customsecondary text-white"
                      : "bg-white"
                  } size-5 rounded-sm border flex items-center justify-center `}
                >
                  <Check className="size-4" />
                </div>
                <span className="font-normal text-sm text-[#000000]">Paid</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <TextArea
              labelStyle="!text-base"
              required
              placeholder={AppConfig.PLACEHOLDERS.EventDescription}
              id="description"
              label="Description"
              error={errors.description}
              value={values.description}
              touched={touched.description}
              onChange={handleChange("description")}
              onBlur={handleBlur}
            />
          </div>

          <Button
            type="submit"
            isLoading={createEventLoading || editEventLoading}
            className={`${!isValid ? "opacity-50" : ""} ${
              isProfilePage ? "max-w-max ml-auto" : ""
            }`}
            disabled={!isValid}
          >
            {details ? (
              <span className=""> Edit event</span>
            ) : (
              <span className=""> Create event</span>
            )}
          </Button>
        </form>
      </FormikProvider>
    </div>
  );
}
