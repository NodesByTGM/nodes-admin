import React, { useState } from "react";
import { SubSection, ChoosePlan } from "../../components";

import { planObj } from "../../utilities/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const CloseIcon = ({ close }) => {
  return (
    <div onClick={() => close()} className="max-w-max">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#D9D9D9" />
        <path
          d="M16 8L8 16"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8L16 16"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const CheckedIcon = ({ light }: { light?: boolean }) => {
  return (
    <div>
      {light ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" rx="10" fill="#EFEFEF" />
          <path
            d="M14 7.25L8.5 12.75L6 10.25"
            stroke="#0C5C56"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" rx="10" fill="#0C5C56" />
          <path
            d="M14 7.25L8.5 12.75L6 10.25"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default function SubscriptionAndBilling({ closeModal }) {
  const user = useSelector((state: RootState) => state.user.user);
  const paymentPlans = [
    { id: "yearly billing", title: "Yearly billing", type: "yearly" },

    { id: "monthly billing", title: "Monthly billing", type: "monthly" },
  ];
  const [selected, setSelected] = useState(paymentPlans[1]);
  const handleCurrentPlan = () => {
    if (user?.subscription?.plan?.toLowerCase() === "pro") {
      return planObj.pro;
    }

    if (user?.subscription?.plan?.toLowerCase() === "business") {
      return planObj.business;
    }
  };

  return (
    <div className="text-[#212121]">
      <div className="flex items-center justify-between mb-[42px] cursor-pointer">
        <span className="font-medium text-[18px] ">
          Subscriptions and Billing
        </span>
        <CloseIcon close={() => closeModal()} />
      </div>
      <pre className="text-blue-400 hidden">{JSON.stringify(user, null, 2)}</pre>
      <ChoosePlan
        selected={selected}
        setSelected={setSelected}
        paymentPlans={paymentPlans}
      />
      <div className="flex flex-col gap-6 mt-8 ">
        {!user?.subscription ? (
          <SubSection
            plan={planObj.standard}
            light={true}
            isCurrentPlan
            isCurrentPlanPayment
            featureDivClass="!grid-cols-1"
          />
        ) : (
          <SubSection
            plan={handleCurrentPlan()}
            light={true}
            isCurrentPlan
            isCurrentPlanPayment
            featureDivClass="!grid-cols-1"
          />
        )}
        {selected.type.toLowerCase() === "yearly" ? (
          <SubSection plan={planObj.pro} featureDivClass="!grid-cols-1" />
        ) : (
          <SubSection
            plan={planObj.proMonthly}
            featureDivClass="!grid-cols-1"
          />
        )}

        {selected.type.toLowerCase() === "yearly" ? (
          <SubSection plan={planObj.business} featureDivClass="!grid-cols-1" />
        ) : (
          <SubSection
            plan={planObj.businessMonthly}
            featureDivClass="!grid-cols-1"
          />
        )}
      </div>
    </div>
  );
}
