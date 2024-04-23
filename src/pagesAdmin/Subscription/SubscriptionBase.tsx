import React from "react";
import { Outlet } from "react-router-dom";
import SubscriptionProvider from "../../context/subscription";

export default function SubscriptionBase() {
  return (
    <div className="min-h-[100vh] admin-main-plain-container ">
      <SubscriptionProvider>
        <Outlet />
      </SubscriptionProvider>
    </div>
  );
}
