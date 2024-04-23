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

  const stats = [
    {
      id: 1,
      accountType: "Total users",
      numberOfUsers: 32,
      trending: false,
      percentage: 40,
    },
    {
      id: 2,
      accountType: "Active users",
      numberOfUsers: 32,
      trending: true,
      percentage: 40,
    },
    {
      id: 3,
      accountType: "Total revenue",
      numberOfUsers: "N190,000",
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

      <div className="grid grid-cols-3 gap-6">
        {stats.map((item) => (
          <div key={item?.id} className="">
            {" "}
            <AdminStat {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
