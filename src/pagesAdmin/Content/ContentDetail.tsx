/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { X } from "react-feather";
import {
  Breadcrumbs,
  Button,
  ButtonOutline,
  Input,
  DateSelect,
  ProjectFileUpload,
  CustomSelect,
  TextArea,
  FormDebug,
  LoadingInputs,
  ConfirmComponent,
  Modal,
  ViewCommentSection,
} from "../../components";
import AppConfig from "../../utilities/config";
import { toast } from "react-toastify";
import {
  contentSchema,
  ContentValidationType,
} from "../../utilities/validation";
import moment from "moment";
import { ContentCategories, AdminEnums } from "../../utilities/constants";
import {
  useUpdateContentForAdminMutation,
  useCreateContentForAdminMutation,
} from "../../api";
import {
  // FormikHelpers,
  useFormik,
} from "formik";
import { useGetContentByIdQuery } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
export default function ContentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: getContentRequest,
    // refetch: contentRefetch,
    isSuccess: isGetContentSuccess,
    isFetching: contentLoading,
  } = useGetContentByIdQuery({ id: id }, { skip: !id });

  const [
    updateRequest,
    {
      isSuccess: isUpdateRequestSuccess,
      isError: isUpdateRequestError,
      error: updateRequestError,
      isLoading: updateRequestLoading,
    },
  ] = useUpdateContentForAdminMutation({ id: id });

  const [
    createRequest,
    {
      isSuccess: isCreateRequestSuccess,
      isError: isCreateRequestError,
      error: createRequestError,
      isLoading: createRequestLoading,
    },
  ] = useCreateContentForAdminMutation();

  const [contentDetail, setContentDetail] = useState<any>(null);
  const [statusModal, setStatusModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);

  const [actionType, setActionType] = useState("");
  const initialModalText = useMemo(() => {
    return {
      text: "",
      description: "",
      status: "",
    };
  }, []);
  const [modalText, setModalText] = useState(initialModalText);

  const handleModalText = useCallback(() => {
    if (
      actionType.toLowerCase() ===
      AdminEnums.CONTENT_STATUSES.Published.toLowerCase()
    )
      setModalText({
        text: "Publish this content",
        description:
          "You are about to publish this content. Do you want to proceed?",
        status: actionType,
      });

    if (
      actionType.toLowerCase() ===
      AdminEnums.CONTENT_STATUSES.Draft.toLowerCase()
    )
      setModalText({
        text: "Save this content to draft",
        description:
          "You are about to save this content. Do you want to proceed?",
        status: actionType,
      });
  }, [actionType]);

  const handlePublishOpen = () => {
    setActionType(AdminEnums.CONTENT_STATUSES.Published);
    setStatusModal(true);
  };

  const handleDraftOpen = () => {
    setActionType(AdminEnums.CONTENT_STATUSES.Draft);
    setStatusModal(true);
  };

  const handleContentCreationAndUpdate = () => {
    if (id) {
      updateRequest({ ...values, status: modalText?.status, id: id });
    } else {
      createRequest({
        title: values.title,
        description: values.description,
        status: modalText?.status,
        category: values.category,
        thumbnail: values?.thumbnail?.url ? values.thumbnail : null,
      });
    }
  };

  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Content",
      url: AppConfig.PATHS.Admin.Content.Base,
    },
    {
      id: 2,
      title: "Name of article",
      url: "#",
    },
  ]);

  const handleFormSubmit = (e: any) => {
    // console.log("Content:" + JSON.stringify(e, null, 2));

    return e;
  };

  const formik = useFormik<ContentValidationType>({
    initialValues: {
      title: "",
      lastEdited: "",
      thumbnail: {
        id: "",
        url: "",
      },
      category: "",
      description: "",
      status: "",
    },
    validationSchema: contentSchema,
    validateOnBlur: true,
    onSubmit: handleFormSubmit,
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

  const handleInputPrefill = useCallback(() => {
    if (contentDetail?.id) {
      setValues({
        title: contentDetail?.title,
        lastEdited: moment(contentDetail?.updatedAt).format("yyyy-MM-DD"),
        thumbnail: {
          id: contentDetail?.thumbnail?.id ? contentDetail?.thumbnail?.id : "",
          url: contentDetail?.thumbnail?.url
            ? contentDetail?.thumbnail?.url
            : "",
        },
        category: contentDetail?.category,
        description: contentDetail?.description,
        status: contentDetail?.status,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentDetail, setValues]);

  useEffect(() => {
    if (isGetContentSuccess) {
      console.log(getContentRequest, null, 2);
      setContentDetail(getContentRequest?.result);
    }
  }, [isGetContentSuccess, getContentRequest]);
  useEffect(() => {
    if (contentDetail) {
      handleInputPrefill();
    }
  }, [contentDetail, handleInputPrefill]);

  useEffect(() => {
    handleModalText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionType]);

  const resetModal = useCallback(() => {
    // setActionType("");
    setStatusModal(false);
    // setModalText(initialModalText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialModalText]);

  useEffect(() => {
    if (isCreateRequestSuccess) {
      resetModal();

      toast.success(`Successfully published content`);
      navigate("/admin/content");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateRequestSuccess, resetModal]);

  useEffect(() => {
    resetModal();

    if (isCreateRequestError || createRequestError) {
      toast.error(
        createRequestError?.message
          ? createRequestError?.message?.message
          : "This action was unsuccessful"
      );
    }
  }, [isCreateRequestError, createRequestError, resetModal]);

  useEffect(() => {
    if (isUpdateRequestSuccess) {
      resetModal();
      if (actionType.toLowerCase() === "publish") {
        toast.success(`Successfully published content`);
      }
      if (actionType.toLowerCase() === "draft") {
        toast.success(`Successfully saved content`);
      }
    }
  }, [isUpdateRequestSuccess, actionType, resetModal]);

  useEffect(() => {
    resetModal();
    // toast.error('Something went wrong')
    // alert(JSON.stringify(updateRequestError))
    if (isUpdateRequestError || updateRequestError) {
      toast.error(
        updateRequestError?.message
          ? updateRequestError?.message?.message
          : "This action was unsuccessful"
      );
    }
  }, [isUpdateRequestError, updateRequestError, resetModal]);

  useEffect(() => {
    if (isGetContentSuccess) {
      setLinks((prev) => {
        return [
          prev[0],
          {
            ...prev[1],
            title: values.title,
          },
        ];
      });
    }
  }, [isGetContentSuccess, values.title]);

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          e?.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <Breadcrumbs links={links} />
          <div className="flex gap-4">
            {" "}
            <Button
              onClick={() => handlePublishOpen()}
              disabled={!isValid}
              className={`${
                !isValid ? "opacity-50" : ""
              } !bg-customprimary max-w-max`}
            >
              Publish
            </Button>
            <ButtonOutline
              onClick={() => handleDraftOpen()}
              disabled={!isValid}
              className={`${!isValid ? "opacity-50" : ""} `}
            >
              Save as draft
            </ButtonOutline>
          </div>
        </div>
        <FormDebug form={{values, contentDetail}} className="max-w-[600px] hidden" />
        {contentLoading ? (
          <LoadingInputs />
        ) : (
          <div className="flex w-full gap-6">
            <div className="flex flex-col flex-1 gap-6">
              <Input
                placeholder={"Enter the title"}
                id="title"
                type="title"
                label="Title"
                error={errors.title}
                value={values.title}
                touched={touched.title}
                onChange={handleChange("title")}
                onBlur={handleBlur}
              />

              <TextArea
                id="description"
                label="Body"
                // error={errors.description}
                value={values.description}
                // touched={touched.description}
                onChange={handleChange("description")}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col  w-full max-w-[40%] gap-6">
              <div className="w-full flex flex-col gap-1">
                <span className="font-medium text-base ">Last Edited</span>

                <DateSelect
                  className={"!rounded-lg"}
                  disabled={false}
                  labelStyle="!text-base"
                  required
                  id="lastEdited"
                  error={errors.lastEdited}
                  value={moment(values.lastEdited).format("yyyy-MM-DD")}
                  touched={touched.lastEdited}
                  onChange={handleChange("lastEdited")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="">
                {" "}
                <ProjectFileUpload
                  value={values?.thumbnail?.url}
                  onChange={(value) => {
                    setFieldValue("thumbnail", value);
                  }}
                  label="Project thumbnail"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-base ">Category </span>
                <CustomSelect
                  paddingy="py-[16px]"
                  defaultValue={values.category}
                  options={ContentCategories}
                  onChange={(value) => setFieldValue("category", value)}
                />
              </div>

              {id ? (
                <div className="flex justify-between items-center">
                  <span className="font-medium text-base text-[#000000]">
                    Comments
                  </span>

                  <div
                    onClick={() => setCommentsModal(true)}
                    className="border font-normal text-base flex items-center justify-center py-3 px-6 rounded border-customprimary text-customprimary"
                  >
                    View comments
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </form>
      <Modal
        sizeClass="sm:max-w-[506px]"
        open={statusModal}
        setOpen={setStatusModal}
      >
        <ConfirmComponent
          title={modalText.text}
          text={modalText.description}
          action={() => {
            handleContentCreationAndUpdate();
          }}
          isLoading={updateRequestLoading || createRequestLoading}
          closeModal={() => setStatusModal(false)}
        />
      </Modal>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={commentsModal}
        setOpen={setCommentsModal}
      >
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <span className="">Comments</span>

            <span
              onClick={() => setCommentsModal(false)}
              className="cursor-pointer"
            >
              <X />
            </span>
          </div>

          <ViewCommentSection />
          <ViewCommentSection last />
        </div>
      </Modal>

      <pre className="hidden">{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
