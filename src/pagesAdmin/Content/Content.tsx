/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import {
  AdminPageHeader,
  AdminPageNav,
  Loader,
  Button,
} from "../../components";
import { useContentContext } from "../../context/hooks";
import { useGetContentsForAdminQuery } from "../../api";
import { useNavigate } from "react-router-dom";
import moment from "moment";
export default function Content() {
  const { pageName, user } = useContentContext();
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    status: "",
    category: "",
  });

  const {
    data: contentResponse,
    refetch: contentRefetch,
    isFetching: contentLoading,
  } = useGetContentsForAdminQuery(query);

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
  const [contentData, setContentData] = useState<any>([]);

  const handleStatusChange = useCallback(() => {
    setQuery((query) => ({
      ...query,
      status: selectedNav?.label,
    }));
  }, [selectedNav]);

  useEffect(() => {
    contentRefetch();
  }, [query, contentRefetch]);

  useEffect(() => {
    handleStatusChange();
  }, [handleStatusChange]);

  useEffect(() => {
    console.log("called" + contentResponse?.result?.items?.length);
    if (contentResponse?.result?.items) {
      setContentData(contentResponse?.result?.items);
    }
  }, [contentResponse]);
  return (
    <div>
      <pre className="text-blue-400 hidden">
        {JSON.stringify({ pageName, user }, null, 2)}
      </pre>
      <div className="flex justify-between mb-[26px]">
        <AdminPageHeader
          title="Content"
          subTitle="Something something about content management"
        />

        <Button
          onClick={() => navigate(`/admin/content/create`)}
          className="max-w-max !h-12 !px-6"
        >
          Create a post
        </Button>
      </div>
      <div className="mb-[28px]">
        <AdminPageNav
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>

      <div className=" py-6">
        {contentLoading && contentData.length === 0 ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}
        {contentData?.length > 0 ? (
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
                    {contentData?.map((item) => (
                      <tr
                        onClick={() => navigate(`/admin/content/edit/${item?.id}`)}
                        className={"cursor-pointer"}
                        key={item.id}
                      >
                        <td className="whitespace-nowrap py-8 pl-4 pr-3 text-base font-normal text-[#212121] sm:pl-0">
                          {item.title}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {item.description}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-base font-normal text-[#212121]">
                          {moment(item.createdAt).format("DD/MM/yyyy")}
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
        ) : null}

        {!contentLoading && contentData.length === 0 ? (
          <div className="my-[60px] flex items-center justify-center text-base text-primary">
            Nothing to see yet
          </div>
        ) : null}
      </div>
    </div>
  );
}
