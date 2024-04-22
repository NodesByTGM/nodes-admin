/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Input, PasswordInput } from "../../components";
import AppConfig from "../../utilities/config";
import {
  adminSignupSchema,
  AdminSignupValidationType,
} from "../../utilities/validation";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import {
  // FormikHelpers,
  useFormik,
} from "formik";

export default function Signup() {
  const handleFormSubmit = (e: any) => {
    if (!isValid) {
      toast.error(AppConfig.ERROR_MESSAGES.ValidationError);
    } else {
      console.log(e);
      return;
    }
  };

  const formik = useFormik<AdminSignupValidationType>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    },
    validationSchema: adminSignupSchema,
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
        <h3 className="text-[#000000] text-[20px] font-medium">
          Welcome Back!
        </h3>
        <span className="text-[#000000] text-base font-normal">
          Nice to see you again
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
            placeholder={"Enter your firstname"}
            id="firstName"
            type="text"
            label="Firstname"
            error={errors.firstName}
            value={values.firstName}
            touched={touched.firstName}
            onChange={handleChange("firstName")}
            onBlur={handleBlur}
          />
          <Input
            placeholder={"Enter your lastname"}
            id="lastName"
            type="text"
            label="Lastname"
            error={errors.lastName}
            value={values.lastName}
            touched={touched.lastName}
            onChange={handleChange("lastName")}
            onBlur={handleBlur}
          />
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
          <PasswordInput
            isAdmin
            
            placeholder={AppConfig.PLACEHOLDERS.Password}
            id="password"
            type="password"
            error={errors.password}
            value={values.password}
            touched={touched.password}
            onChange={handleChange("password")}
            onBlur={handleBlur}
          />
          <PasswordInput
            isAdmin
            label="Confirm password"
            placeholder={AppConfig.PLACEHOLDERS.ConfirmPassword}
            id="confirmPassword"
            type="password"
            error={errors.confirmPassword}
            value={values.confirmPassword}
            touched={touched.confirmPassword}
            onChange={handleChange("confirmPassword")}
            onBlur={handleBlur}
          />

          <Button
            isLoading={false}
            className="my-4"
            disabled={!isValid}
            type="submit"
          >
            Sign Up
          </Button>

          <div className="text-center">
            Not new to Nodes?{" "}
            <Link to={"/admin/auth/login"} className="text-primary">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
