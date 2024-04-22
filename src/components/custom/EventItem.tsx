/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import AppConfig from "../../utilities/config";
import moment from 'moment'
import { useNavigate } from "react-router-dom";
import {
  BookMarkIcon,
  ItemDeleteIcon,
  Modal,
  DeleteComponent,
} from "../../components";
import { toast } from "react-toastify";
import {
  useDeleteEventMutation,
  useSaveEventMutation,
  useUnSaveEventMutation,
} from "../../api";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function EventItem({
  className,
  data,
  isBusiness,
  refetchEvents,
}: {
  className?: string;
  data?: any;
  isBusiness?: boolean;
  refetchEvents?: () => void;
}) {
  const user = useSelector((state: RootState) => state.user.user);
  const [userCanSave, setUserCanSave] = useState(false);
  const [userIsSubscribed, setUserIsSubscribed] = useState(false);

  const [currentPlan, setCurrentPlan] = useState<any>(null);

  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [
    deleteRequest,
    {
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
      isLoading: deleteLoading,
    },
  ] = useDeleteEventMutation();

  const [
    saveRequest,
    {
      isSuccess: isSaveSuccess,
      isLoading: isSaveLoading,
      isError: isSaveError,
      error: saveError,
    },
  ] = useSaveEventMutation();

  const [
    unSaveRequest,
    {
      isSuccess: isUnSaveSuccess,
      isLoading: isUnSaveLoading,
      isError: isUnSaveError,
      error: unSaveError,
    },
  ] = useUnSaveEventMutation();

  const handleSave = (data) => {
    console.log(JSON.stringify(data, null, 2));

    if (data?.saved) {
      unSaveRequest({ id: data?.id });
      return;
    }
    if (!data?.saved) {
      saveRequest({ id: data?.id });
      return;
    }
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

  //save
  useEffect(() => {
    if (isSaveError) {
      toast.error(saveError?.message?.message);
    }
  }, [isSaveError, saveError]);

  useEffect(() => {
    if (isSaveSuccess) {
      // if (refetchEvents) {
      //   refetchEvents();
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
      // if (refetchEvents) {
      //   refetchEvents();
      // }
    }
  }, [isUnSaveSuccess]);

  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
      setDeleteModal(false);
     
      if (refetchEvents) {

        refetchEvents();
      }
    }
  }, [isDeleteError, deleteError]);
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted event");
      if (refetchEvents) {
        refetchEvents();
      }
      setDeleteModal(false);
    }
  }, [isDeleteSuccess]);

  return (
    <div className="">
      {data ? (
        <div
          className={`${className} p-6 min-h-[320px] rounded-lg bg-cover bg-center text-white`}
          style={{ backgroundImage: `url('/img/checkcards.png')` }}
        >
          <pre className="text-blue-400 hidden">
            {JSON.stringify(data, null, 2)}
          </pre>
          {userIsSubscribed ? (
            <div className="flex items-start justify-end mb-8">
              {isBusiness ? (
                <div onClick={() => setDeleteModal(true)} className="">
                  <ItemDeleteIcon white />
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
                      <BookMarkIcon white saved={data?.saved} />
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ) : null}

          <div className="flex items-start flex-col text-[#ffffff] font-medium text-base">
            <span className="mb-4 capitalize">{data?.name}</span>
            <span className="mb-6">{moment(data?.dateTime).format('DD-MM-yyyy')}</span>
            <div className="flex items-center gap-2">
              <TfiLocationPin />
              <span className="">{data?.location}</span>
            </div>
            {userIsSubscribed ? (
              <div className="mt-10 flex justify-between">
                <div className=""></div>
                <span
                  onClick={() =>
                    navigate(`/dashboard/see-more/business-events/${data?.id}`)
                  }
                  className="cursor-pointer text-sm"
                >
                  View details
                </span>
              </div>
            ) : <div className="mt-10"></div>  }
          </div>

          <Modal
            sizeClass="sm:max-w-[506px]"
            open={deleteModal}
            setOpen={setDeleteModal}
          >
            <DeleteComponent
              title={"Delete this event"}
              text={`You are about to permanently delete '${data?.name}'. Do you want to proceed?`}
              action={() => {
                deleteRequest(data?.id);
              }}
              isLoading={deleteLoading}
              closeModal={() => setDeleteModal(false)}
            />
          </Modal>
        </div>
      ) : (
        <div
          className={`${className} md:h-[368px] h-[300px] w-[250px] md:w-[360px] rounded bg-cover bg-center text-white`}
          style={{ backgroundImage: `url('/img/placeholder.png')` }}
        >
          <div className="bg-darkgradient p-5 h-full  flex flex-col justify-end">
            <h3 className="w-[220px] md:w-[280px] text-ellipsis text-nowrap overflow-hidden text-xl font-medium h-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </h3>
            <p className="w-[220px] md:w-[280px] text-ellipsis text-nowrap overflow-hidden font-medium h-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="cursor-pointer flex gap-2 items-center text-md">
              <Link to={`${AppConfig.PATHS.Dashboard.Posts.Base}/hbjhbjshbjd`}>
                <span>Learn more</span>
              </Link>
              <ArrowRight className="w-4 mt-[2px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventItem;
