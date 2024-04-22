import React from "react";

export default function BillingHistory() {
  const historyList = [
    {
      id: 1,
      plan: "Pro",
      billingDate: "Description stuff",
      amount: "N89,000",
      status: "Active",
    },
    {
        id: 2,
        plan: "Pro",
        billingDate: "Description stuff",
        amount: "N89,000",
        status: "Active",
      },
  ];
  return (
    <div className="">
      <span className="mb-[21px] px-6">User details</span>
      <div className="px-6 mb border-b border-[#F2F2F2] py-8 w-full items-center justify-between flex text-base text-[#212121] font-normal">
        <span className="">Jane Doe</span>
        <span className="">@Janedoe</span>
        <span className="">DD/MM/YYYY </span>
        <span className="">derinjuwon@gmail.com </span>
        <span className="">NORMAL </span>
      </div>
      <div className="pt-6 bg-[#FBFBFB]">
        <div className=" py-6 bg-[#ffffff]">
          <div className="px-6 mb-[21px]">
            <span className="text-base font-medium">Billing history</span>
          </div>
          {historyList?.length > 0 ? (
            <div className="flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-[##ECECEB]">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="uppercase pt-6 pb-4 pl-4 pr-3 text-left text-sm font-medium text-[#757575] sm:pl-0"
                        >
                          <span className="pl-6"> Plan</span>
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
                          Amount
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
                    <tbody className="divide-y divide-[##ECECEB]">
                      {historyList?.map((item) => (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap py-8 pl-4 pr-3 text-base font-normal text-[#212121] sm:pl-0">
                            <span className="pl-6"> {item.plan}</span>
                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {item.billingDate}
                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {item.amount}
                          </td>

                          <td className="relative whitespace-nowrap py-8 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                            <span className="text-primary hover:text-primary font-medium text-sm">
                              <span className="pr-6"> {item.status}</span>
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
