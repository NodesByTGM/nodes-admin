import React from 'react'

export default function ChoosePlan({ selected, setSelected, paymentPlans }) {
    return (
      <div className=" mb-2 text-[#212121] mr-6 flex flex-col gap-6">
        <span className="hidden font-medium text-[18px] text-nowrap">
          Choose Plan
        </span>
        <div>
          <div className="flex gap-6 items-center">
            {paymentPlans.map((paymentPlan) => (
              <div key={paymentPlan.id} className="flex items-center">
                <div
                  onClick={() => setSelected(paymentPlan)}
                  className="cursor-pointer flex gap-4"
                >
                  <div
                    className={`${
                      selected.id == paymentPlan.id
                        ? "border-[5px] border-[#212121] bg-[#D6DE21]"
                        : "border-[#D6D6D6]"
                    } rounded-full border  h-4 w-4`}
                  ></div>
                  <span className="text-[#212121] font-medium text-sm">
                    {paymentPlan.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }