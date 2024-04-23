/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import {
  BookMarkIcon,
  ItemDeleteIcon,
  Modal,
  JobPost,
  DeleteComponent,
} from "../../components";
import {
  useDeleteJobMutation,
  useSaveJobMutation,
  useUnSaveJobMutation,
} from "../../api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function JobItem({
  className,
  isBusiness = false,
  canViewJob = false,
  data,
  refetchJobs,
}: {
  canViewJob?: boolean;
  className?: string;
  isBusiness?: boolean;
  data?: any;
  refetchJobs?: () => void;
}) {
  const user = useSelector((state: RootState) => state.user.user);

  const [viewJobOpen, setViewjobOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userIsSubscribed, setUserIsSubscribed] = useState(false);
  const [userCanSave, setUserCanSave] = useState(false);
  // const [userCanApply, setUserCanApply] = useState(false);

  const [currentPlan, setCurrentPlan] = useState<any>(null);

  const navigate = useNavigate();

  const navigateToJobDetails = (id) => {
    navigate(`/dashboard/see-more/business-jobs/${id}`);
  };

  const handleUserCanSave = useCallback(() => {
    if (currentPlan !== "pro" && currentPlan !== "business") {
      setUserCanSave(false);
      return;
    }
    setUserCanSave(true);
  }, [currentPlan]);

  const handleUserIsSubscribed = useCallback(() => {
    if (currentPlan === "pro" || currentPlan === "business") {
      setUserIsSubscribed(true);
      return;
    }
    setUserIsSubscribed(false);
  }, [currentPlan]);

  useEffect(() => {
    handleUserCanSave();
    handleUserIsSubscribed();
  }, [user, handleUserCanSave, handleUserIsSubscribed]);

  useEffect(() => {
    const plan = user?.subscription?.plan?.toLowerCase();

    if (plan) {
      setCurrentPlan(plan);
    }
  }, [user]);

  const [
    deleteRequest,
    {
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
      isLoading: deleteLoading,
    },
  ] = useDeleteJobMutation();

  const [
    saveRequest,
    {
      isSuccess: isSaveSuccess,
      isLoading: isSaveLoading,
      isError: isSaveError,
      error: saveError,
    },
  ] = useSaveJobMutation();

  const [
    unSaveRequest,
    {
      isSuccess: isUnSaveSuccess,
      isLoading: isUnSaveLoading,
      isError: isUnSaveError,
      error: unSaveError,
    },
  ] = useUnSaveJobMutation();

  const handleSave = (data) => {
    // console.log(JSON.stringify(data, null, 2));

    if (data?.saved) {
      unSaveRequest({ id: data?.id });
      return;
    }
    if (!data?.saved) {
      saveRequest({ id: data?.id });
      return;
    }
  };

  //save
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

  //Unsave

  useEffect(() => {
    if (isUnSaveError) {
      toast.error(unSaveError?.message?.message);
    }
  }, [isUnSaveError, unSaveError]);

  useEffect(() => {
    if (isUnSaveSuccess) {
      // if (refetchJobs) {
      //   refetchJobs();
      // }
    }
  }, [isUnSaveSuccess]);

  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
      setDeleteModal(false);
      if (refetchJobs) {
        refetchJobs();
      }
    }
  }, [isDeleteError, deleteError]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted job");
      if (refetchJobs) {
        refetchJobs();
      }
      setDeleteModal(false);
    }
  }, [isDeleteSuccess]);

  return (
    <div
      className={`${className} bg-[#ffffff] text-[#000000] w-full p-6 rounded-lg border border-[#EFEFEF] flex flex-col items-start gap-8`}
    >
      <pre className="text-gray-500  hidden">
        {/* {JSON.stringify(data, null, 2)} */}
        {JSON.stringify(
          {
            canSave: userCanSave,
            hasSubed: userIsSubscribed,
          },
          null,
          2
        )}
      </pre>

      <div className="flex items-start justify-between w-full ">
        <div className="">
          <img src="/img/SmallCheck.png" alt="" className="!size-[72px]" />
        </div>

        {userIsSubscribed ? (
          <div className="">
            {" "}
            {isBusiness ? (
              <div onClick={() => setDeleteModal(true)} className="">
                <ItemDeleteIcon />
              </div>
            ) : (
              <div className="">
                {" "}
                {userCanSave ? (
                  <div
                    onClick={() => handleSave(data)}
                    className={`${
                      isSaveLoading || isUnSaveLoading ? "animate-pulse" : ""
                    }`}
                  >
                    <BookMarkIcon saved={data?.saved} />
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div className="w-full flex flex-col gap-4 items-start text-start text-[#000000] text-base">
        <div className="w-full max-h-[24px]">
          <p className="font-medium  truncate">
            {data?.description ? data.description : "Job description/title"}
          </p>
        </div>
        <div className="w-full max-h-[24px]">
          {" "}
          <p className="font-normal truncate">
            {data?.name ? data.name : "Name of company"}
          </p>
        </div>
      </div>

      <span className="font-medium text-[18px]">
        {data?.payRate ? data.payRate : "$10-1k/hr"}
      </span>

      <div className="w-full flex items-start justify-between gap-1">
        <div className="flex items-center gap-2 max-h-[24px] max-w-[50%]">
          <span className="">
            <CiCalendar />
          </span>
          <span className="fonnt-normal text-base truncate">
            {data?.workRate ? data.workRate : "20 hrs/wk"}
          </span>
        </div>
        <div className="flex items-center gap-2 max-h-[24px] max-w-[50%]">
          <span className="">
            <TfiLocationPin />
          </span>

          <p className="font-normal text-base text-start truncate">
            {data?.location ? data.location : "Lagos | Nigeria"}
          </p>
        </div>
      </div>

      {userIsSubscribed ? (
        <div className="w-full">
          {canViewJob ? (
            <div
              onClick={() => setViewjobOpen(true)}
              className="w-full flex justify-end text-primary font-medium text-sm cursor-pointer"
            >
              View job
            </div>
          ) : (
            <div className="w-full flex items-center justify-between gap-2">
              <div className="flex  text-primary font-normal text-base cursor-pointer max-w-[50%]">
                <p className="truncate">
                  {" "}
                  {data?.applicants?.length > 0
                    ? data?.applicants?.length
                    : 0}{" "}
                  applicant{data?.applicants?.length !== 1 ? "s" : ""}{" "}
                </p>
              </div>
              <div
                onClick={() => navigateToJobDetails(data?.id)}
                className="flex justify-end text-primary font-medium text-sm cursor-pointer"
              >
                View details
              </div>
            </div>
          )}
        </div>
      ) : null}

      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={viewJobOpen}
        setOpen={setViewjobOpen}
      >
        <div className="">
          <JobPost
          
            details={data}
            refetchJobs={refetchJobs}
            closeModal={() => setViewjobOpen(false)}
          />
        </div>
      </Modal>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={deleteModal}
        setOpen={setDeleteModal}
      >
        <DeleteComponent
          title={"Delete this job post"}
          text={`You are about to permanently delete '${data?.name}'. Do you want to proceed?`}
          action={() => {
            deleteRequest(data?.id);
          }}
          isLoading={deleteLoading}
          closeModal={() => setDeleteModal(false)}
        />
      </Modal>
    </div>
  );
}
