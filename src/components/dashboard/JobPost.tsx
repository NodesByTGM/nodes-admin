/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { BookMarkIcon, Button } from "../../components";
import { LiaTimesSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { PiSuitcase } from "react-icons/pi";
import { formatDate } from "../../utilities";
import { useApplyToJobMutation, useSaveJobMutation } from "../../api";
import { toast } from "react-toastify";
export default function JobPost({ closeModal, details, refetchJobs= ()  => {}}: {closeModal: any, details: any, refetchJobs?: () => void}) {
  const [
    applyToJob,
    {
      isLoading: applyToJobLoading,
      isSuccess: applyToJobIsSuccess,
      isError: applyToJobIsError,
      error,
    },
  ] = useApplyToJobMutation();

  const [
    saveRequest,
    {
      isSuccess: isSaveSuccess,
      isLoading: isSaveLoading,
      isError: isSaveError,
      error: saveError,
    },
  ] = useSaveJobMutation();


  useEffect(() => {
    if (isSaveError) {
      toast.error(saveError?.message?.message);
    }
  }, [isSaveError, saveError]);

  useEffect(() => {
    if (isSaveSuccess) {
      // if (refetchJobs) {
      //   refetchJobs();
      // }
    }
  }, [isSaveSuccess]);

  useEffect(() => {
    if (applyToJobIsSuccess) {
      refetchJobs()
      closeModal()
      toast.success("Job application sent");
    }
  }, [applyToJobIsSuccess]);

  useEffect(() => {
    if (applyToJobIsError) {
      // alert(JSON.stringify(error, null, 2));
      closeModal()
      toast.error(error?.message?.message || "An error occurred. Try Again.");
    }
  }, [applyToJobIsError, error]);

  return (
    <div className={`flex flex-col gap-[48px] text-[#000000]`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-[#D9D9D9] rounded-[2px] mr-[3px] size-6"></div>
          <span className="font-medium text-[20px]">
            {details?.name ? details.name : "Name of company"}
          </span>
          <span className="mx-4">
            <svg
              width="3"
              height="19"
              viewBox="0 0 3 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.98 18.86H0.98V0.639999H2.98V18.86Z" fill="black" />
            </svg>
          </span>
          <span className="font-normal text-[20px]">
            Posted {formatDate(details?.updatedAt)}
          </span>
        </div>
        <div
          onClick={() => closeModal()}
          className="cursor-pointer text-[#000000] text-base"
        >
          {" "}
          <LiaTimesSolid />
        </div>
      </div>
      <div className="text-blue-400 hidden">{JSON.stringify(details, null, 2)}</div>
      <div className="flex  items-center justify-between">
        <span className="font-medium text-[24px]">
          {details?.name} <span className="text-red-400">*</span>{" "}
        </span>

        <div className="flex items-center justify-between gap-4">
        <div
            onClick={() => saveRequest({ id: details?.id })}
            className={`${isSaveLoading ? "animate-pulse" : ""}`}
          >
            <BookMarkIcon />
          </div>
          <Button
            isLoading={applyToJobLoading}
            disabled={applyToJobLoading}
            onClick={() => applyToJob({ id: details?.id })}
            className={"max-w-max text-white"}
          >
            Apply
          </Button>
        </div>
      </div>
      <span className="font-medium text-[20px]">
        $10-1k/hr <span className="text-red-400">*</span>
      </span>
      <div className="p-4 bg-[#D6DE211A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="">
            <TfiLocationPin />
          </span>
          <span className="font-medium text-base">
            Lagos | Nigeria <span className="text-red-400">*</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="">
            <CiCalendar />
          </span>
          <span className="font-medium text-base">{details?.workRate}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="">
            <PiSuitcase />
          </span>
          <span className="font-medium text-base">{details?.jobType}</span>
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] p-4 text-[#212121] font-medium">
          <span className="text-base">Experience </span>
          <span className="text-[20px]">{details?.experience}</span>
        </div>
        <div className="flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] p-4 text-[#212121] font-medium">
          <span className="text-base">Rate </span>
          <span className="text-[20px]">{details?.payRate}</span>
        </div>
        <div className="flex-1 flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] p-4 text-[#212121] font-medium">
          <span className="text-base">Skills </span>
          <div className="flex gap-6">
            {details?.skills?.map((skill, index) => (
              <div
                key={index}
                className="rounded-[100px] py-2 px-[27.75px] bg-[#FBFCE9]"
              >
                <span className="font-normal text-base text-[#000000]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6 text-[#212121] rounded-[4px] border border-[#EFEFEF]">
        <span className="font-medium text-base ">Job description</span>
        <span className="font-notmel text-sm">{details?.description}</span>
      </div>
    </div>
  );
}
