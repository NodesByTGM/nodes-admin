/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button, PasswordInput } from "../../components";
import AppConfig from "../../utilities/config";
import {
  resetPasswordSchema,
  ResetPasswordType,
} from "../../utilities/validation";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import { useResetPasswordMutation } from "../../api";

import {
  // FormikHelpers,
  useFormik,
} from "formik";

export default function ResetPassword() {
  const [
    resetPasswordRequest,
    {
      isSuccess: isResetPasswordSuccess,
      isError: isResetPasswordError,
      error: resetPasswordError,
      isLoading: resetPasswordLoading,
    },
  ] = useResetPasswordMutation();
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { accountId, token } = params;


  const handleFormSubmit = (e: any) => {
    if (!isValid) {
      toast.error(AppConfig.ERROR_MESSAGES.ValidationError);
    } else {
      console.log(e);

      resetPasswordRequest({
        payload: {
          password: e.password,
          newPassword: e.password,
        },
        accountId,
        token
      })
      return;
    }
  };

  const formik = useFormik<ResetPasswordType>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
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

  const checkResetLink = () => {
    setLoading(true);
    mainClient
      .get(
        `${AppConfig.API_ENDPOINTS.Auth.CheckResetLinkURL}/${accountId}/${token}`
      )
      .then((r) => {
        if (r.status === 200) {
          setValid(true);
          setLoading(false);
        } else setValid(false);
      })
      .catch((e) => {
        setLoading(false);
        setValid(false);
        handleAxiosError(e);
      });
  };

  useEffect(() => {
    checkResetLink();
  }, []);

  useEffect(() => {
    if (isResetPasswordSuccess) {
      toast.success("Reset password successful");
      navigate(AppConfig.PATHS.Auth.Login);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResetPasswordSuccess]);

  useEffect(() => {
    if (isResetPasswordError) {
      toast.error(resetPasswordError?.message?.message || "Something went wrong");
    }
  }, [isResetPasswordError, resetPasswordError]);

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
        {valid && !loading ? (
          <form
            onSubmit={(e) => {
              e?.preventDefault();
              handleSubmit(e);
            }}
            className="flex flex-col gap-6 justify-center w-full mt-2"
          >
            <PasswordInput
              isAdmin
              // forgotPasswordLink
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
              required
              label="Confirm password"
              type="password"
              placeholder={AppConfig.PLACEHOLDERS.ConfirmPassword}
              id="confirmPassword"
              error={errors.confirmPassword}
              value={values.confirmPassword}
              touched={touched.confirmPassword}
              onChange={handleChange("confirmPassword")}
              onBlur={handleBlur}
            />

            <Button
              isLoading={resetPasswordLoading}
              className="my-4"
              disabled={!isValid}
              type="submit"
            >
              Reset
            </Button>

            <span
              onClick={() => navigate("/auth/login")}
              className="max-w-max mx-auto cursor-pointer"
            >
              Go Back
            </span>
          </form>
        ) : (
          <div className="text-center my-10 animate-pulse text-primary text-[18px] font-medium">
            {loading
              ? "Please wait while we verify your token"
              : "Invalid link "}
          </div>
        )}
      </div>
    </div>
  );
}
