import React from "react";
import { Outlet } from "react-router-dom";
import ContentProvider from "../../context/content";

export default function ContentBase() {
  return (
    <div className="min-h-[100vh] admin-main-plain-container ">
      <ContentProvider>
      <Outlet />
      </ContentProvider>
    </div>
  );
}
