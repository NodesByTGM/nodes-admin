import { CreditCard, BarChart, File, User } from "react-feather";
import { NavLink } from "react-router-dom";
import AppConfig from "../../utilities/config";
import { SearchComponent, SidebarMenu } from "../../components";

function Sidebar() {
  const paths = [
    {
      name: "Content",
      icon: <File />,
      path: AppConfig.PATHS.Admin.Content.Base,
    },
    {
      name: "User",
      icon: <User />,
      path: AppConfig.PATHS.Admin.User.Base,
    },
    {
      name: "Subscription",
      icon: <CreditCard />,
      path: AppConfig.PATHS.Admin.Subscription.Base,
    },
    {
      name: "Analytics",
      icon: <BarChart />,
      path: AppConfig.PATHS.Admin.Analytics.Base,
    },
  ];
  return (
    <div className="bg-[#FBFBFB] w-full transition-all duration-300 h-full  px-6 overflow-y-auto">
      {/* <div className="mt-3 pb-4 border-b p-3 mb-4">
                  <Menu />
              </div> */}
      <div className="flex flex-col gap-8 pt-8 pb-6">
        <img
          src="/NodesLogoPrimary.png"
          alt=""
          className="h-[24px] w-[89.37px]"
        />

        <SearchComponent />
      </div>
      <div className="flex flex-col h-[570px]">
        {" "}
        <div className="flex flex-col gap-5 flex-1 overflow-y-auto">
          {paths.map((r, i) => (
            <NavLink
              to={String(r.path)}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-[#212121] text-white authNavLink"
                  : isPending
                  ? "bg-[#212121] text-white authNavLink"
                  : "authNavLink"
              }
              key={i}
            >
              <div>{r.icon}</div>
              <div className="hidden lg:block">{r.name}</div>
            </NavLink>
          ))}
        </div>

       <div className="mt-auto mb-8"> <SidebarMenu /></div>
      </div>
    </div>
  );
}

export default Sidebar;
