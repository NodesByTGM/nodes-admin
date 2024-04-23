/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import { AccountTypesEnum } from "../../utilities/constants";
import moment from "moment";
export default function DeletedUsers({ useQuery }) {
  // const navigate = useNavigate();
  const [usersData, setUsersData] = useState<any>([]);

  const {
    data: usersResponse,
    // refetch: usersRefetch,
    isFetching: usersLoading,
  } = useQuery();

  useEffect(() => {
    if (usersResponse?.result?.items?.length > 0) {
      setUsersData(usersResponse?.result.items);
    }
  }, [usersResponse]);
  return (
    <div>
      <div className="mt-[28px] flex flex-col border border-[#D9D9D9] rounded-lg">
        <div className="font-medium text-base flex justify-between border-b border-[#D9D9D9] px-6 py-[21px]">
          <span className=" text-[#212121]">Deleted</span>

          <span className="text-[#0C5C56] hidden">View all</span>
        </div>
        <div className=" py-6">
          {usersLoading && usersData.length === 0 ? (
            <div className="my-40">
              <Loader />
            </div>
          ) : null}
          {usersData?.length > 0 && !usersLoading ? (
            <div className="flow-root">
              <div className=" h-[50vh] overflow-y-auto  -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-[#D9D9D9]">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="uppercase pt-6 pb-4 pl-4 pr-3 text-left text-sm font-medium text-[#757575] sm:pl-0"
                        >
                          <span className="pl-6"> Fullname</span>
                        </th>

                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          Date Joined
                        </th>
                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          Email Address
                        </th>
                        <th
                          scope="col"
                          className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                        >
                          <span className="pr-6"> Category</span>
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
                      {usersData?.map((item) => (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap py-8 pl-4 pr-3 text-base font-normal text-[#212121] sm:pl-0">
                            <span className="pl-6"> {item.name}</span>
                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {item.username}
                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {moment(item.dateJoined).format("DD/MM/yyyy")}
                          </td>

                          <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                            {item.email}
                          </td>

                          <td className="relative whitespace-nowrap py-8 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                            <span className="uppercase text-primary hover:text-primary font-medium text-sm">
                              <span className="pr-6">  {AccountTypesEnum[item.type]}</span>
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
