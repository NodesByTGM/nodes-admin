import React, { useState } from "react";
import {
  AdminPageHeader,
  AdminPageNav,
} from "../../components";
import Overview from './Overview'
import List from './List'


export default function Subscription() {
  const navs = [
    {
      label: "Overview",
    },
    {
      label: "List",
    },
  ];

  const [selectedNav, setSelectedNav] = useState(navs[0]);

 

  return (
    <div>
      <div className="flex justify-between mb-[26px]">
        <AdminPageHeader
          title="Subscriptions"
          subTitle="Something something about subscription management"
        />
      </div>
      <div className="mb-[28px]">
        <AdminPageNav
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>

   {
      selectedNav.label.toLowerCase() == 'overview' && <Overview />
   }
   {
   selectedNav.label.toLowerCase() == 'list' &&  <div><List/></div>
   }
    </div>
  );
}
