import React from "react";
import { Outlet } from "react-router-dom";

export default function SubscriptionBase() {
  return (
    <div className="min-h-[100vh] admin-main-plain-container ">
      
      <Outlet />
    </div>
  );
}
