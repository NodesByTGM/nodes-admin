import React, { useState } from "react";
import { AdminPageHeader, AdminPageNav } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function Content() {
  const user = useSelector((state: RootState) => state.user.user);

  const navs = [
    {
      label: "Published",
    },
    {
      label: "Archives",
    },
    {
      label: "Drafts",
    },
  ];

  const [selectedNav, setSelectedNav] = useState(navs[0]);
  const contentList = [
    {
      id: 1,
      title: "Jane Doe",
      description: "Description stuff",
      date: "23/08/2024",
      category: "Trending News",
    },
    {
      id: 2,
      title: "Jane Doe",
      description: "Description stuff",
      date: "23/08/2024",
      category: "Trending News",
    },
  ];
  return (
    <div>
      <pre className="text-blue-400 hidden">{JSON.stringify(user, null, 2)}</pre>
      <div className="flex justify-between mb-[26px]">
        <AdminPageHeader
          title="Content"
          subTitle="Something something about content management"
        />
      </div>
      <div className="mb-[28px]">
        <AdminPageNav
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>

      <div className=" py-6">
        {contentList?.length > 0 ? (
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-[#EFEFEF]">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="uppercase pt-6 pb-4 pl-4 pr-3 text-left text-sm font-medium text-[#757575] sm:pl-0"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                      >
                        Date
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
                  <tbody className="divide-y divide-[#F2F2F2]">
                    {contentList?.map((item) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap py-8 pl-4 pr-3 text-base font-normal text-[#212121] sm:pl-0">
                          {item.title}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {item.description}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {item.date}
                        </td>

                        <td className="relative whitespace-nowrap py-8 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                          <span className="text-primary hover:text-primary font-medium text-sm">
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
