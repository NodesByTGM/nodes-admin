/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Breadcrumbs,
  Button,
  Input,
  ButtonOutline,
  Modal,
  LoadingInputs,
} from "../../components";
import { getAge } from "../../utilities/common";

import AppConfig from "../../utilities/config";
import BillingHistory from "./BillingHistory";
import { useUsersContext } from "../../context/hooks";
import { useGetUserByIdQuery } from "../../api";
import {
  profileSchema,
  profileValidationType,
} from "../../utilities/validation";
import { useFormik } from "formik";
import { useParams,  } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();

  const { pageName, user } = useUsersContext();

  const {
    data: userDetailsResponse,
    // refetch: userDetailsRefetch,
    isFetching: userDetailsLoading,
  } = useGetUserByIdQuery({ userId: id });

  const [historyModal, setHistoryModal] = useState(false);
  const [links] = useState([
    {
      id: 1,
      title: "User",
      url: AppConfig.PATHS.Admin.User.Base,
    },
    {
      id: 2,
      title: "Name of user",
      url: "#",
    },
  ]);
  const initialCollaborator = {
    name: "",
    role: "",
    collabName: "",
  };

  const handleClickForm = (values: any) => {
    const data = {
      name: `${values.firstName} ${values.lastName}`,
      username: values.username,
      avatar: values.avatar,
      skills: [],
      location: values.location,
      height: values.height,
      age: getAge(values.age),
      linkedIn: values.linkedIn,
      instagram: values.instagram,
      twitter: values.twitter,
      headline: values.headline,
      bio: values.bio,
      website: values.website,
      spaces: values.spaces,
      comments: values.comments,
      companyName: values.projectName,
      logo: values.projectUrl,
      yoe: 0,
    };
    console.log(JSON.stringify(data, null, 2));
    // updateUserProfile(data);
  };
  const formik = useFormik<profileValidationType>({
    initialValues: {
      firstName: userDetailsResponse?.result?.name?.split(" ")[0],
      lastName: userDetailsResponse?.result?.name?.split(" ")[1],
      username: userDetailsResponse?.result?.username,
      avatar: userDetailsResponse?.result?.avatar,
      location: userDetailsResponse?.result?.location,
      height: userDetailsResponse?.result?.height,
      age: userDetailsResponse?.result?.dob,
      headline: userDetailsResponse?.result?.headline,
      bio: userDetailsResponse?.result?.bio,
      website: userDetailsResponse?.result?.website,
      linkedIn: userDetailsResponse?.result?.linkedIn,
      instagram: userDetailsResponse?.result?.instagram,
      twitter: userDetailsResponse?.result?.twitter,
      projectName: userDetailsResponse?.result?.projectName,
      description: userDetailsResponse?.result?.description,
      projectUrl: userDetailsResponse?.result?.projectUrl,
      spaces: userDetailsResponse?.result?.spaces,
      comments: userDetailsResponse?.result?.comments,
      collaborators: [initialCollaborator],
    },
    validationSchema: profileSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    // setFieldError,
    // setValues,
    // setFieldValue,
    // handleChange,
    handleSubmit,
    // errors,
    // touched,
    // values,
    // isValid,
    // handleBlur,
  } = formik;
  return (
    <div>
      <pre className="text-blue-400 hidden">
        {JSON.stringify({ pageName, user }, null, 2)}
      </pre>
      <pre className="text-blue-400 hidden">
        {JSON.stringify({ userDetailsResponse }, null, 2)}
      </pre>
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
                  // error={errors.name}
                  // value={values.name}
                  // touched={touched.name}
                  // onChange={handleChange("name")}
                  // onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder={"@username"}
                  id="username"
                  label="User name"
                  // error={errors.username}
                  // value={values.username}
                  // touched={touched.username}
                  // onChange={handleChange("username")}
                  // onBlur={handleBlur}
                />
              </div>

              <div className="w-full">
                <Input
                  placeholder={"Email address of user"}
                  id="email"
                  type="email"
                  label="Email address"
                  // error={errors.email}
                  // value={values.email}
                  // touched={touched.email}
                  // onChange={handleChange("email")}
                  // onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder={"DD/MM/YY"}
                  id="date"
                  type="date"
                  label="Date joined"
                  // error={errors.date}
                  // value={values.date}
                  // touched={touched.date}
                  // onChange={handleChange("date")}
                  // onBlur={handleBlur}
                />
              </div>

              <div className="w-full">
                <Input
                  placeholder={"Category"}
                  id="category"
                  label="Category"
                  // error={errors.category}
                  // value={values.category}
                  // touched={touched.category}
                  // onChange={handleChange("category")}
                  // onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-full">
                <Input
                  placeholder={"Subscription"}
                  id="subscription"
                  label="Subscription"
                  // error={errors.subscription}
                  // value={values.subscription}
                  // touched={touched.subscription}
                  // onChange={handleChange("subscription")}
                  // onBlur={handleBlur}
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
