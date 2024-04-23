import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { SEO, AdminSidebar } from "../components";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="">{children}</div>;
};

function AdminMain() {
  return (
    <ScrollToTop>
      <div className="">
        <SEO />

        <div className="flex max-h-screen h-full">
          <div className="lg:w-[300px] fixed h-full">
            <AdminSidebar />
          </div>
          <div className="flex-1 ml-[300px] h-fit">
            <div className="bg-[#FBFBFB] pt-4 pr-4 pb-[100px]">
              <Outlet />
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default AdminMain;
