import React, { useState } from "react";
import { AdminPeriodFilter, AdminStat } from "../../components";

export default function Overview() {
  const periods = [
    {
      label: "Today",
    },
    {
      label: "Yesterday",
    },
    {
      label: "24 Hours",
    },
    {
      label: "1 Week",
    },
    {
      label: "30 Days",
    },
    {
      label: "12 Months",
    },
    {
      label: "Custom",
    },
  ];
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);

  const contentList = [
    {
      id: 1,
      name: "Pro",
      billingDate: "Description stuff",
      plan: "Admin",
      status: "Active",
    },
  ];

  const stats = [
    {
      id: 1,
      accountType: "Business Accounts",
      numberOfUsers: 32,
      trending: false,
      percentage: 40,
    },
    {
      id: 2,
      accountType: "Normal Accounts",
      numberOfUsers: 32,
      trending: true,
      percentage: 40,
    },
    {
      id: 3,
      accountType: "Talent Accounts",
      numberOfUsers: 32,
      trending: true,
      percentage: 40,
    },
    {
      id: 4,
      accountType: "Cancelled Accounts",
      numberOfUsers: 32,
      trending: true,
      percentage: 40,
    },
  ];
  return (
    <div>
      <div className="mb-[28px] justify-end flex">
        <AdminPeriodFilter
          periods={periods}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item?.id} className="">
            {" "}
            <AdminStat {...item} />
          </div>
        ))}
      </div>
      <div className="mt-[28px] flex flex-col border border-[#D9D9D9] rounded-lg">
        <div className="font-medium text-base flex justify-between border-b border-[#D9D9D9] px-6 py-[21px]">
          <span className=" text-[#212121]">Recent subscriptions</span>

          <span className="text-[#0C5C56]">View all</span>
        </div>
        <div className=" py-6">
          {contentList?.length > 0 ? (
            <div className="flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-[#D9D9D9]">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="uppercase pt-6 pb-4 pl-4 pr-3 text-left text-sm font-medium text-[#757575] sm:pl-0"
                        >
                         <span className="pl-6"> Name</span>
                        </th>

                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          Billing date & time{" "}
                        </th>
                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          Plan
                        </th>
                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          
                          <span className="pr-6"> Status</span>
                        </th>

                        {/* <th
                        scope="col"
                        className="uppercase relative pt-6 pb-4 pl-3 pr-4 sm:pr-0 text-left text-sm font-medium text-[#757575]"
                      >
                        <span className="">Actions</span>
                      </th> */}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D9D9D9]">
                      {contentList?.map((item) => (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap py-8 pl-4 pr-3 text-base font-normal text-[#212121] sm:pl-0">
                           
                            <span className="pl-6">  {item.name}</span>

                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {item.billingDate}
                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {item.plan}
                          </td>

                          <td className="relative whitespace-nowrap py-8 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                            <span className="text-primary hover:text-primary font-medium text-sm">
                           
                              <span className="pr-6">     {item.status}</span>

                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-[60px] flex items-center justify-center text-base text-primary">
              Nothing to see yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
