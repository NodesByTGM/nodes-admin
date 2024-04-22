/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import {
  ModalCancel,
  TitleInput,
  TextArea,
  Button,
  PaperClip,
  PictureIcon,
} from "../../components";
import { useUploadFileMutation } from "../../api";
import AppConfig from "../../utilities/config";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { FormDebug } from "../../components";
import { useCommunityPostMutation } from "../../api";
import { toast } from "react-toastify";
import { postValidationType, postSchema } from "../../utilities/validation";
import { Plus } from "react-feather";
import { convertToBase64, checkFileSize } from "../../utilities/common";

export default function AddPost({ closeModal, refetch }) {
  const [
    postToCommunity,
    { isLoading: postToCommunityLoading, isSuccess: isPostToCommunitySuccess },
  ] = useCommunityPostMutation();

  const pictureRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [
    upload,
    {
      data: uploadResponse,
      // isLoading: uploadFileLoading,
      isSuccess: uploadFileSuccess,
      error: uploadFileError,
      isError: isUploadError,
    },
  ] = useUploadFileMutation();

  const handleFileUpload = (e: any) => {
    const files = e.target.files;
    console.log("My upload: " + JSON.stringify(files), null, 2);
    if (!files || files.length === 0) {
      // setSelectedFile(undefined);
      return;
    }
    if (!checkFileSize(files[0])) {
      // setSelectedFile(undefined);
      toast.error(
        `File selected exceeded file limit size of ${AppConfig.FILE_SIZE_LIMIT}mb`
      );
      return;
    }
    setSelectedFile(files[0]);
  };
  const handleFileConversion = async () => {
    if (selectedFile) {
      const res = await convertToBase64(selectedFile);
      let binary = "";
      // console.log(res, null, 2);
      if (res) {
        binary = String(res);
        // const binaryBlob = atob(binary);
        upload({ file: binary });
      }
    }
  };

  useEffect(() => {
    handleFileConversion();
  }, [selectedFile, upload]);

  useEffect(() => {
    if (uploadFileSuccess) {
      console.log("Data: " + JSON.stringify(uploadResponse, null, 2));

      // alert(uploadResponse?.result);
      setFieldValue("attachments", [
        ...values.attachments,
        uploadResponse?.result,
      ]);
    }
    // alert(JSON.stringify(uploadResponse?.data, null, 2))
  }, [uploadFileSuccess, uploadResponse]);

  useEffect(() => {
    if (isUploadError) {
      toast.error(uploadFileError);
    }
  }, [uploadFileError, isUploadError]);

  const handleClickForm = (values?: any) => {
    const data = {
      ...values,
    };
    console.log(JSON.stringify(data, null, 2));
    postToCommunity(data);
  };

  const formik = useFormik<postValidationType>({
    initialValues: {
      body: "",
      attachments: [
        // {
        //   id: "",
        //   url: "",
        // },
      ],
      hashtags: [""],
    },
    validationSchema: postSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    values,
    isValid,
    handleBlur,
  } = formik;
  useEffect(() => {
    if (isPostToCommunitySuccess) {
      closeModal();
      refetch();
      toast.success("Post sent");
    }
  }, [isPostToCommunitySuccess]);
  return (
    <div>
      <FormikProvider value={formik}>
        <div className="flex justify-between items-start">
          <span className="font-medium text-[#000000] text-[24px]">
            Ask the members a question
          </span>
          <div onClick={() => closeModal()} className="">
            {" "}
            <ModalCancel />
          </div>
        </div>
        <FormDebug form={{ values, errors, isValid }} className="hidden" />

        <div className="flex flex-col mt-6">
          <div className="mb-2">
            <TitleInput
              placeholder={AppConfig.PLACEHOLDERS.AddTitle}
              id="name"
              className="hidden !border-none p-0 !placeholder:text-[#757575] !placeholder:text-[24px] !placeholder:font-medium "

              // error={errors.name}
              // value={values.name}
              // touched={touched.name}
              // onChange={handleChange("name")}
              // onBlur={handleBlur}
            />
          </div>
          <div className="">
            <TextArea
              placeholder={AppConfig.PLACEHOLDERS.WritePost}
              id="name"
              className="!border-none p-0 placeholder:text-[#757575] placeholder:text-sm "
              value={values.body}
              onChange={handleChange("body")}
              onBlur={handleBlur}
            />
          </div>

          <FieldArray
            name="attachments"
            render={(arrayHelpers) => (
              <div className="w-full grid grid-cols-3 ">
                {values.attachments.map((image, index) => (
                  <div
                    onClick={() => arrayHelpers.remove(index)}
                    key={image?.id + String(index)}
                    className="w-full  "
                  >
                    <img
                      key={image?.id}
                      src={image.url}
                      alt=""
                      className="rounded-md h-[173px] w-full max-w-[274px]"
                    />
                  </div>
                ))}
              </div>
            )}
          />

          <div className="mt-6 py-4 rounded mb-6 border border-[#EFEFEF] flex items-center justify-center w-full text-base text-[#757575]">
            Add 1 or 2 hashtags that represent your post
          </div>

          <div className="border-b border-[#D6D6D6] mb-6 flex justify-end w-full py-2">
            <span className="text-[#757575] font-medium">300 characters</span>
          </div>

          <div className="w-full flex items-center justify-between ">
            <div className="flex gap-2">
              <div className="">
                <PaperClip />
              </div>
              <div onClick={() => pictureRef?.current?.click()} className="">
                <PictureIcon />
              </div>
              <input
                ref={pictureRef}
                multiple={false}
                type="file"
                accept=".png, .jpg"
                // value={value}
                onChange={handleFileUpload}
                className={`w-full hidden  p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-grey-dark focus:border-primary disabled:text-placeholder 
        placeholder:text-placeholder text-ellipsis text-sm text-black `}
              />
            </div>
            <div className="max-w-max">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                type="submit"
                isLoading={postToCommunityLoading}
                className={`${!isValid ? "opacity-50" : ""} `}
                disabled={!isValid}
              >
                <span className="flex items-center gap-4">
                  Post <Plus className="text-sm" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </FormikProvider>
    </div>
  );
}
