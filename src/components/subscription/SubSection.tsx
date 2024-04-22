/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Modal, DeleteComponent } from "../../components";
import { useNavigate } from "react-router-dom";
// import PaystackComponent from "../../pages/subscription/PaystackComponent";
import { CheckedIcon } from "../../components/dashboard/SubscriptionAndBilling";
import { planObj } from "../../utilities/constants";
export default function SubSection({
  isCurrentPlan = false,
  isCurrentPlanPayment = false,
  paymentPlan,
  plan,
  light,
  viewOthers,
  user,
  featureDivClass = ''
}: {
  isCurrentPlan?: boolean;
  isCurrentPlanPayment?: boolean;
  paymentPlan?: any;
  plan: any;
  light?: boolean;
  viewOthers?: boolean;
  user?: any;
  featureDivClass?: string
}) {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className="bg-[#ffffff] grid grid-cols-2 p-6   border border-[#D6D6D6] rounded-lg ">
      <div className="flex-1 flex flex-col border-r border-px border-[#D6D6D6] pr-8 h-full">
        <div className="flex justify-between flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <span className="font-medium text-base text-[#00100B] mr-[7px]">
                <span className="capitalize">{plan?.type}</span>
              </span>

              {plan?.subPlan && (
                <div className="bg-[#F1F7F5] rounded-[20px] p-2 font-normal text-xs">
                  <span className="">{`${
                    isCurrentPlan ? "Current plan" : plan?.subPlan
                  }`}</span>
                </div>
              )}
            </div>
            <span className="font-normal text-sm text-[#646464]">
              {" "}
              {plan?.supportingText}
            </span>
          </div>

          <div className="text-customprimary font-medium text-[20px]  ml-6 ">
            {!paymentPlan ? (
              <span className="flex items-end gap-px">
                {plan?.amount}{" "}
                <span className="text-base font-normal text-[#646464]">
                  {plan?.tenor}
                </span>{" "}
              </span>
            ) : (
              <span className="flex items-end gap-px">
                {plan?.amount}
                <span className="text-base font-normal text-[#646464]">
                  {plan?.tenor}
                </span>{" "}
              </span>
            )}
          </div>
        </div>
        {!viewOthers ? (
          <div
            
            className="mt-[53px]"
          >
            {plan?.type?.toLowerCase() == "free" || isCurrentPlan ? (
              <button onClick={() => plan.action(navigate, isCurrentPlan)} className="flex items-center justify-center text-customprimary font-medium text-sm rounded h-[48px] w-full bg-[#EFEFEF]">
                {" "}
                Current Plan
              </button>
            ) : (
              <Button onClick={() => plan.action(navigate)} className="w-full !bg-customprimary">Upgrade plan</Button>
            )}
          </div>
        ) : (
          <div className="flex">
            {plan?.type.toLowerCase() ===
            planObj?.standard?.type?.toLowerCase() ? (
              <button
                onClick={() => {
                  navigate("/subscription");
                }}
                className="w-full mt-[53px] flex items-center justify-center text-primary font-medium text-sm rounded h-[48px] bg-[#EFEFEF]"
              >
                {" "}
                View other plans
              </button>
            ) : (
              <div className="w-full">
                {isCurrentPlanPayment ? (
                  <div className="flex gap-px mt-[53px] w-full">
                    <button
                      onClick={() => setDeleteModal(true)}
                      className="h-[48px] px-10 min-w-max"
                    >
                      {" "}
                      <span className="font-medium text-sm text-[#D11F54] ">
                        Cancel plan
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        navigate("/subscription");
                      }}
                      className=" flex items-center justify-center text-primary font-medium text-sm rounded h-[48px] w-full bg-[#EFEFEF]"
                    >
                      {" "}
                      View other plans
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-8 mt-[53px] w-full">
                    <button
                      onClick={() => {
                        navigate("/subscription");
                      }}
                      className="max-w-max flex items-center justify-center text-primary font-medium text-sm rounded-[8px] px-8 border border-[#EFEFEF] h-[48px] w-full main-bg-gray"
                    >
                      {" "}
                      View other plans
                    </button>
                    {user && (
                      <div className="flex-1">
                        {/* <PaystackComponent user={user} /> */}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 pl-8 h-full">
        <div className="flex flex-col gap-6">
          <span className="font-normal text-base text-[#00100B]">
            Features:
          </span>

          <div className={`${featureDivClass} grid grid-cols-2 gap-x-6 gap-y-4`}>
            {plan?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckedIcon light={light} />
                <span className="font-normal text-sm text-[#000000]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden w-[400px] max-w-[400px] col-span-1 text-wrap">
        {" "}
        <pre className={"flex max-w-[40px] text-wrap"}>
          {JSON.stringify(plan?.pricing)}
        </pre>
      </div>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={deleteModal}
        setOpen={setDeleteModal}
      >
        <DeleteComponent
          title={"Delete this plan"}
          text={`You are about to cancel this plan. Do you want to proceed?`}
          action={() => {
            // deleteRequest(data?.id);
          }}
          isLoading={false}
          closeModal={() => setDeleteModal(false)}
        />
      </Modal>
    </div>
  );
}
