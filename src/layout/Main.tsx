import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { Footer, Header, SEO, Sidebar } from "../components";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="">{children}</div>;
};

function Main() {
  return (
    <ScrollToTop>
      <div className="">
        <SEO />

        <div className="flex max-h-screen h-full">
          <div className="lg:w-[300px] fixed h-full">
            <Sidebar />
          </div>
          <div className="flex-1 ml-[300px] h-fit">
            <div className="sticky top-0 z-[99]">
              <Header />
            </div>
            <div className="">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Main;
