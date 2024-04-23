import React from "react";
import { Outlet } from "react-router-dom";
import UsersProvider from "../../context/users";

export default function UserDetailsBase() {
  return (
    <div className="min-h-[100vh] admin-main-plain-container ">
      <UsersProvider>
        <Outlet />
      </UsersProvider>
    </div>
  );
}
