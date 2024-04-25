/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import {
  Breadcrumbs,
  Button,
  Input,
  ButtonOutline,
  Modal,
  LoadingInputs,
  FormDebug,
} from "../../components";
// import { getAge } from "../../utilities/common";

import AppConfig from "../../utilities/config";
import BillingHistory from "./BillingHistory";
import { useUsersContext } from "../../context/hooks";
import { useGetUserWithIdQuery } from "../../api";
import {
  adminUserProfileSchema,
  AdminUserProfileValidationType,
} from "../../utilities/validation";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function UserDetails() {
  const { id } = useParams();

  const { pageName, user } = useUsersContext();

  const {
    data: userDetailsResponse,
    // refetch: userDetailsRefetch,
    isFetching: userDetailsLoading,
    isSuccess: userDetailsIsSuccess,
  } = useGetUserWithIdQuery({ id: id });

  const [historyModal, setHistoryModal] = useState(false);
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "User",
      url: AppConfig.PATHS.Admin.User.Base,
    },
    {
      id: 2,
      title: "",
      url: "#",
    },
  ]);

  const handleClickForm = (values: any) => {
    // const data = {
    //   name: `${values.firstName} ${values.lastName}`,
    //   username: values.username,
    //   avatar: values.avatar,
    //   skills: [],
    //   location: values.location,
    //   height: values.height,
    //   age: getAge(values.age),
    //   linkedIn: values.linkedIn,
    //   instagram: values.instagram,
    //   twitter: values.twitter,
    //   headline: values.headline,
    //   bio: values.bio,
    //   website: values.website,
    //   spaces: values.spaces,
    //   comments: values.comments,
    //   companyName: values.projectName,
    //   logo: values.projectUrl,
    //   yoe: 0,
    // };
    console.log(JSON.stringify(values, null, 2));
    // updateUserProfile(data);
  };
  const formik = useFormik<AdminUserProfileValidationType>({
    initialValues: {
      name: userDetailsResponse?.result?.name?.split(" ")[0],
      username: userDetailsResponse?.result?.username,
      email: userDetailsResponse?.result?.email,
      createdAt: userDetailsResponse?.result?.createdAt,
      category: userDetailsResponse?.result?.category,
      subscription: userDetailsResponse?.result?.subscription?.plan
        ? `${userDetailsResponse?.result?.subscription?.plan}/${userDetailsResponse?.result?.subscription?.tenor}`
        : "",
    },
    validationSchema: adminUserProfileSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    // setFieldError,
    setValues,
    // setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    // isValid,
    handleBlur,
  } = formik;
  const handleInputPrefill = useCallback(() => {
    setValues({
      name: userDetailsResponse?.result?.name?.split(" ")[0],
      username: userDetailsResponse?.result?.username,
      email: userDetailsResponse?.result?.email,
      createdAt: userDetailsResponse?.result?.createdAt,
      category: userDetailsResponse?.result?.category,
      subscription: userDetailsResponse?.result?.subscription?.plan
        ? `${userDetailsResponse?.result?.subscription?.plan}/${userDetailsResponse?.result?.subscription?.tenor}`
        : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetailsResponse, setValues]);
  useEffect(() => {
    if (userDetailsResponse?.result) {
      // setUserData(userDetailsResponse?.result);
      handleInputPrefill();
    }
  }, [userDetailsResponse, handleInputPrefill]);

  useEffect(() => {
    if (userDetailsIsSuccess) {
      setLinks((prev) => {
        return [
          prev[0],
          {
            ...prev[1],
            title: values.name,
          },
        ];
      });
    }
  }, [userDetailsIsSuccess, values.name]);
  return (
    <div>
      <pre className="text-blue-400 hidden">
        {JSON.stringify({ pageName, user }, null, 2)}
      </pre>
      <pre className="text-blue-400 hidden">
        {JSON.stringify({ userDetailsResponse }, null, 2)}
      </pre>
      <FormDebug form={values} className="hidden" />
      <div className="flex items-center justify-between mb-6">
        <Breadcrumbs links={links} />
        <Button className="!bg-[#D11F54] max-w-max">Delete User</Button>
      </div>

      {userDetailsLoading ? (
        <LoadingInputs />
      ) : (
        <div className="">
          <form
            onSubmit={(e) => {
              e?.preventDefault();
              handleSubmit();
            }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="flex flex-col gap-6 col-span-1">
              <div className="w-full">
                <Input
                  placeholder={"Name of user"}
                  id="name"
                  label="Name of user"
                  error={errors.name}
                  value={values.name}
                  touched={touched.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder={"@username"}
                  id="username"
                  label="User name"
                  error={errors.username}
                  value={values.username}
                  touched={touched.username}
                  onChange={handleChange("username")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="w-full">
                <Input
                  placeholder={"Email address of user"}
                  id="email"
                  type="email"
                  label="Email address"
                  error={errors.email}
                  value={values.email}
                  touched={touched.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder={"DD/MM/YY"}
                  id="createdAt"
                  type="date"
                  label="Date joined"
                  error={errors.createdAt}
                  value={moment(values.createdAt).format("yyyy-MM-DD")}
                  touched={touched.createdAt}
                  onChange={handleChange("createdAt")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="w-full">
                <Input
                  placeholder={"Category"}
                  id="category"
                  label="Category"
                  error={errors.category}
                  value={values.category}
                  touched={touched.category}
                  onChange={handleChange("category")}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-full">
                <Input
                  placeholder={"Subscription"}
                  id="subscription"
                  label="Subscription"
                  error={errors.subscription}
                  value={values.subscription}
                  touched={touched.subscription}
                  onChange={handleChange("subscription")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base text-[#000000] font-medium">
                  Subscriptions
                </span>

                <ButtonOutline
                  onClick={(e) => {
                    e?.preventDefault();
                    setHistoryModal(true);
                  }}
                  className="max-w-max"
                >
                  History
                </ButtonOutline>
              </div>
            </div>
          </form>
        </div>
      )}

      <Modal
        sizeClass="sm:max-w-[1059px] !px-0"
        open={historyModal}
        setOpen={setHistoryModal}
      >
        <BillingHistory />
      </Modal>
    </div>
  );
}
