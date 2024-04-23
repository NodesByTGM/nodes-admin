/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { useUploadFileMutation } from "../api";
import { convertToBase64, checkFileSize } from "../utilities/common";
import AppConfig from "../utilities/config";
// import { mainClient } from "../utilities/client";
// import AppConfig from "../utilities/config";
import { Loader } from "../components";
import { toast } from "react-toastify";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
  onChange: (e) => void;
  value?: string;
}
export default function ProjectFileUpload({
  className = "",
  value = "",
  label = "",
  description = "",
  touched = false,
  error,
  required,
  onChange,
  ...props
}: InputProps) {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [
    upload,
    {
      data: uploadResponse,
      isLoading: uploadFileLoading,
      isSuccess: uploadFileSuccess,
      error: uploadFileError,
      isError: isUploadError,
    },
  ] = useUploadFileMutation();

  const handleFileUpload = (e: any) => {
    const files = e.target.files;
    console.log("My upload: " + JSON.stringify(files), null, 2);
    if (!files || files.length === 0) {
      return;
    }
    if (!checkFileSize(files[0])) {
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

      onChange(uploadResponse?.result);
    }
    // alert(JSON.stringify(uploadResponse?.data, null, 2))
  }, [uploadFileSuccess, uploadResponse]);

  useEffect(() => {
    if (isUploadError) {
      toast.error(uploadFileError);
    }
  }, [uploadFileError, isUploadError]);

  const setBgImg = () => {
    return {
      backgroundRepeat: "no-repeat",
      "-webkit-background-size": "cover",
      " -moz-background-size": "cover",
      "-o-background-size": "cover",
      backgroundSize: "cover",
      // backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundImage: "url(" + value + ")",
      "object-fit": "cover",
    };
  };

  return (
    <div>
      {label ? (
        <div className="font-medium text-sm mb-1">
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <div
        onClick={() => inputRef.current?.click()}
        style={setBgImg()}
        className="border-dash bg-cover cursor-pointer flex flex-col gap-[10px] px-6 py-[53px] rounded-[5px] items-center justify-center"
      >
        {uploadFileLoading ? (
          <div className="">
            <Loader />
          </div>
        ) : (
          <div className="min-h-[42px]">
            {!value ? (
              <div className="flex flex-col gap-[10px] ">
                <span className="text-[#757575] font-normal text-base">
                  Drag image here or browse your files{" "}
                </span>
                <span className="text-[#757575] font-normal text-base">
                  Recommended image size: 00 x 00px
                </span>
                <span className="hidden">{value}</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        multiple={false}
        type="file"
        accept=".png, .jpg"
        // value={value}
        onChange={handleFileUpload}
        className={`w-full hidden  p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-grey-dark focus:border-primary disabled:text-placeholder 
        placeholder:text-placeholder text-ellipsis text-sm text-black ${className} `}
        {...props}
      />
      {description ? <div className="my-2 text-sm">{description}</div> : null}
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
