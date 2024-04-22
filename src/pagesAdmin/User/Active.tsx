import React from "react";
import { useNavigate } from "react-router-dom";

export default function Active() {
  const navigate = useNavigate();

  const contentList = [
    {
      id: 1,
      fullName: "Jane Doe",
      username: "Userrr",
      date: "23/08/2024",
      email: "email@gmail.com",
      category: "Normal",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      username: "Userrr",
      date: "23/08/2024",
      email: "email@gmail.com",
      category: "Normal",
    },
  ];
  return (
    <div>
      <div className="border-t border-[#D9D9D9]"></div>

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
                        Fullname
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
                        Category
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
                      <tr
                        onClick={() => navigate(`/admin/user/${item.id}`)}
                        className="cursor-pointer"
                        key={item.id}
                      >
                        <td className="whitespace-nowrap py-8 pl-4 pr-3 text-base font-normal text-[#212121] sm:pl-0">
                          {item.fullName}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {item.username}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {item.date}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {item.email}
                        </td>

                        <td className="relative whitespace-nowrap py-8 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                          <span className="uppercase text-primary hover:text-primary font-medium text-sm">
                            {item.category}
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
  );
}
