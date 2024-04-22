/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Button, Input, Back } from "../../components";
import AppConfig from "../../utilities/config";
import { emailSchema, EmailValidationType } from "../../utilities/validation";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "../../api";

import {
  // FormikHelpers,
  useFormik,
} from "formik";

export default function ForgotPassword() {
  const [
    forgotPasswordRequest,
    {
      isSuccess: isForgotPasswordSuccess,
      isError: isForgotPasswordError,
      error: forgotPasswordError,
      isLoading: forgotPasswordLoading,
    },
  ] = useForgotPasswordMutation();

  const handleFormSubmit = (e: any) => {
    if (!isValid) {
      toast.error(AppConfig.ERROR_MESSAGES.ValidationError);
    } else {
      // console.log(e);
      forgotPasswordRequest({
        email: e.email,
      });

      return;
    }
  };

  useEffect(() => {
    if (isForgotPasswordSuccess) {
      toast.success("A password reset link has been sent to your email");
    }
  }, [isForgotPasswordSuccess]);

  useEffect(() => {
    if (isForgotPasswordError) {
      toast.error(
        forgotPasswordError?.message?.message || "Something went wrong"
      );
    }
  }, [isForgotPasswordError, forgotPasswordError]);

  const formik = useFormik<EmailValidationType>({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    validateOnBlur: true,
    onSubmit: handleFormSubmit,
  });

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4 mb-10">
        <div className="flex w-full justify-end mb-6">
          <Back link={AppConfig.PATHS.Admin.Auth.Login} />
        </div>
        <h3 className="text-[#000000] text-[20px] font-medium">
          Reset your password
        </h3>
        <span className="text-[#000000] text-base font-normal text-center">
          <p> Forgot your password? Simply enter the email address</p>
          <p className="mt-1"> associated with your Nodes account.</p>
        </span>
      </div>
      <div className="">
        <form
          onSubmit={(e) => {
            e?.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-6 justify-center w-full mt-2"
        >
          <Input
            placeholder={"Enter email address"}
            id="email"
            type="email"
            label="Email address"
            error={errors.email}
            value={values.email}
            touched={touched.email}
            onChange={handleChange("email")}
            onBlur={handleBlur}
          />

          <Button
            isLoading={forgotPasswordLoading}
            className="my-4"
            disabled={!isValid}
            type="submit"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
}
