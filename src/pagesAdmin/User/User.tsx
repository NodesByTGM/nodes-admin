import React, { useState } from "react";
import { AdminPageHeader, AdminPageNav } from "../../components";
import Active from "./Active";
import DeletedUsers from "./DeletedUsers";

export default function User() {
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

      {selectedNav.label.toLowerCase() == "active" && <Active />}
      {selectedNav.label.toLowerCase() == "deleted" && (
        <div>
          <DeletedUsers />
        </div>
      )}
    </div>
  );
}
