/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
} from "../../components";
import AppConfig from "../../utilities/config";
import { toast } from "react-toastify";
import {
  contentSchema,
  ContentValidationType,
} from "../../utilities/validation";
import moment from "moment";
import { ContentCategories } from "../../utilities/constants";
import { useUpdateContentForAdminMutation } from "../../api";
import {
  // FormikHelpers,
  useFormik,
} from "formik";
import { useGetContentByIdQuery } from "../../api";
import { useParams } from "react-router-dom";
export default function ContentDetail() {
  const { id } = useParams();
  const {
    data: getContentRequest,
    // refetch: contentRefetch,
    isSuccess: isGetContentSuccess,
    isFetching: contentLoading,
  } = useGetContentByIdQuery({ id: id });

  const [
    updateRequest,
    {
      isSuccess: isUpdateRequestSuccess,
      isError: isUpdateRequestError,
      error: updateRequestError,
      isLoading: updateRequestLoading,
    },
  ] = useUpdateContentForAdminMutation({ id: id });

  const [contentDetail, setContentDetail] = useState<any>(null);
  const [statusModal, setStatusModal] = useState(false);
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
    if (actionType.toLowerCase() === "publish")
      setModalText({
        text: "Publish this content",
        description:
          "You are about to publish this content. Do you want to proceed?",
        status: "Publish",
      });

    if (actionType.toLowerCase() === "draft")
      setModalText({
        text: "Save this content to draft",
        description:
          "You are about to save this content. Do you want to proceed?",
        status: "Draft",
      });
  }, [actionType]);

  const handlePublishOpen = () => {
    setActionType("Publish");
    setStatusModal(true);
  };

  const handleDraftOpen = () => {
    setActionType("Draft");
    setStatusModal(true);
  };

  const [links] = useState([
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
    console.log(JSON.stringify(e, null, 2));

    return;
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
    setValues({
      title: contentDetail?.title,
      lastEdited: moment(contentDetail?.updatedAt).format("yyyy-MM-DD"),
      thumbnail: {
        id: contentDetail?.thunbnail?.id ? contentDetail?.thunbnail?.id : "",
        url: contentDetail?.thunbnail?.url ? contentDetail?.thunbnail?.url : "",
      },
      category: contentDetail?.category,
      description: contentDetail?.description,
      status: contentDetail?.status,
    });
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
  }, [initialModalText]);

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
              className="!bg-customprimary max-w-max"
            >
              Publish
            </Button>
            <ButtonOutline
              onClick={() => handleDraftOpen()}
              disabled={!isValid}
            >
              Save as draft
            </ButtonOutline>
          </div>
        </div>
        <FormDebug form={values} className="hidden" />
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

              <div className="flex justify-between items-center">
                <span className="font-medium text-base text-[#000000]">
                  Comments
                </span>

                <div className="border font-normal text-base flex items-center justify-center py-3 px-6 rounded border-customprimary text-customprimary">
                  View comments
                </div>
              </div>
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
            updateRequest({ ...values, status: modalText?.status, id: id });
          }}
          isLoading={updateRequestLoading}
          closeModal={() => setStatusModal(false)}
        />
      </Modal>

      <pre className="hidden">{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
