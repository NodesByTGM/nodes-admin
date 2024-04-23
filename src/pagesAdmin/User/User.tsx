import React, { useState } from "react";
import { AdminPageHeader, AdminPageNav } from "../../components";
import Active from "./Active";
import DeletedUsers from "./DeletedUsers";
import { useUsersContext } from "../../context/hooks";
import { useGetUsersQuery } from "../../api";


export default function User() {
  const { pageName, user } = useUsersContext();


  const navs = [
    {
      label: "Active",
    },
    {
      label: "Deleted",
    },
  ];

  const [selectedNav, setSelectedNav] = useState(navs[0]);
  
  return (
    <div>
       <pre className="text-blue-400 hidden">
        {JSON.stringify({ pageName, user }, null, 2)}
      </pre>
      <div className="flex justify-between mb-[26px]">
        <AdminPageHeader
          title="User"
          subTitle="Something something about user management"
        />
      </div>
      <div className="mb-[28px]">
        <AdminPageNav
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>

      {selectedNav.label.toLowerCase() == "active" && <Active useQuery={useGetUsersQuery}/>}
      {selectedNav.label.toLowerCase() == "deleted" && (
        <div>
          <DeletedUsers useQuery={useGetUsersQuery} />
        </div>
      )}
    </div>
  );
}
