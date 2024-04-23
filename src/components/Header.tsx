/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { ActionIcon } from "../components";
import {
  ChevronDown,
  Flag,
  LogOut,
  Menu,
  Settings,
  Smartphone,
} from "react-feather";
import { Link } from "react-router-dom";
import { Button, Searchbar } from ".";
import { useAuth } from "../context/hooks";
import Avatar from "./Avatar";
import { LogoutComponent } from "././../components";

function QRCode() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_927_30832)">
        <path
          d="M75 0H0V75H75V0ZM62.5 62.5H12.5V12.5H62.5V62.5Z"
          fill="#212121"
        />
        <path
          d="M25 25H50V50H25V25ZM0 200H75V125H0V200ZM12.5 137.5H62.5V187.5H12.5V137.5Z"
          fill="#212121"
        />
        <path
          d="M25 150H50V175H25V150ZM125 0V75H200V0H125ZM187.5 62.5H137.5V12.5H187.5V62.5Z"
          fill="#212121"
        />
        <path
          d="M150 25H175V50H150V25ZM25 87.5H0V112.5H37.5V100H25V87.5ZM87.5 112.5H112.5V137.5H87.5V112.5ZM37.5 87.5H62.5V100H37.5V87.5ZM112.5 150H87.5V162.5H100V175H112.5V162.5V150ZM75 87.5V100H62.5V112.5H87.5V87.5H75ZM100 50H112.5V75H100V50ZM112.5 100V112.5H137.5V87.5H100V100H112.5ZM87.5 75H100V87.5H87.5V75ZM112.5 175H137.5V200H112.5V175ZM87.5 175H100V200H87.5V175ZM112.5 137.5H125V150H112.5V137.5ZM112.5 37.5V12.5H100V0H87.5V50H100V37.5H112.5ZM150 175H162.5V200H150V175ZM150 150H175V162.5H150V150ZM137.5 162.5H150V175H137.5V162.5ZM125 150H137.5V162.5H125V150ZM175 125V137.5H187.5V150H200V125H187.5H175ZM187.5 162.5H175V200H200V175H187.5V162.5ZM125 125V137.5H162.5V112.5H137.5V125H125ZM150 87.5V100H175V112.5H200V87.5H175H150Z"
          fill="#212121"
        />
      </g>
      <defs>
        <clipPath id="clip0_927_30832">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Playstore() {
  return (
    <span>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_927_30771)">
          <path
            d="M8.55584 6.9868L11.0048 4.5378L3.24884 0.256801C2.9454 0.0881801 2.60382 0.000107735 2.25668 0.000983023C1.90955 0.00185831 1.56842 0.0916521 1.26584 0.261801L8.55584 6.9868ZM0.536836 0.949801C0.358836 1.2408 0.256836 1.5738 0.256836 1.9268V14.0728C0.256836 14.4148 0.349836 14.7408 0.517836 15.0258L7.84884 7.6948L0.536836 0.949801ZM14.2518 6.3298L11.9158 5.0408L9.29084 7.6648L12.5078 10.6318L14.2528 9.6688C14.8808 9.3208 15.2568 8.6968 15.2568 7.9988C15.2562 7.65566 15.1624 7.31913 14.9854 7.02517C14.8084 6.73121 14.5548 6.49086 14.2518 6.3298ZM8.58384 8.3728L1.23284 15.7238C1.54316 15.9038 1.8951 15.9996 2.25384 16.0018C2.59384 16.0018 2.93584 15.9158 3.24884 15.7428L11.5858 11.1418L8.58384 8.3728Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_927_30771">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.25)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

function Header() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);
  const [appOpened, setAppOpened] = useState(false);
  const wrapperRef = useRef<any>(null);
  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setMenuOpened(false);
      setAppOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`z-[99] relative main-bg-gray pt-8  px-10 w-full flex justify-end items-center `}>
      <div className=" gap-4 items-center hidden">
        <Menu className="w-[50px] cursor-pointer" />
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <div className="flex gap-2 text-2xl font-semibold cursor-pointer items-center">
              <img src="/logo.svg" alt="" className="h-8 w-9" />
              <span className="text-primary text-2xl font-semibold">Nodes</span>
            </div>
          </Link>
          <Searchbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            className="hidden md:block"
          />
        </div>
      </div>

      <div className="flex gap-4 items-center z-[99]">
        <div className="md:block hidden">
          <Button
            theme={"secondary"}
            className="!border-grey-dark bg-white"
            onClick={() => setAppOpened(!appOpened)}
          >
            <div className="flex items-center gap-3">
              {" "}
              <Smartphone className="w-4" />
              <span>Get app</span>
            </div>
          </Button>
        </div>

        <ActionIcon bell bgColor="bg-[#ffffff]" />
        <ActionIcon mail bgColor="bg-[#ffffff]" />
        {/* <Bell className="w-8 text-primary" />
        <Mail className="w-8 text-primary" /> */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <Avatar src="/img/avatar.jpeg" />
          <ChevronDown className="text-primary" />

          {menuOpened ? (
            <div className="shadow-normal border rounded-lg bg-white w-[200px] absolute right-4 top-14">
              <Link to={"/settings"}>
                <div className="flex items-center gap-2 p-2 hover:bg-customsecondary-light opacity-70 hover:opacity-100 transition-all ">
                  <Settings /> <span>Settings</span>
                </div>
              </Link>
              <div className="flex items-center gap-2 p-2 hover:bg-customsecondary-light opacity-70 hover:opacity-100 transition-all ">
                <Flag /> <span>Report Issue</span>
              </div>
              <LogoutComponent>
                <div className="flex items-center gap-2 p-2 hover:bg-customsecondary-light opacity-70 hover:opacity-100 transition-all ">
                  <LogOut /> <span>Sign Out</span>
                </div>
              </LogoutComponent>
            </div>
          ) : null}

          {appOpened ? (
            <div className="p-4 z-50 flex gap-4 absolute top-16 rounded right-40 border shadow-normal bg-white w-[600px]">
              <div>
                <QRCode />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="text-3xl">Scan to get Nodes on your phone</h2>
                <p>or find us on the App Store and Play store</p>
                <div className="flex gap-2">
                  <Button>
                    <Playstore />
                    <span>Google play</span>
                  </Button>
                  <Button>
                    <span>
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5177 9.54618C14.5422 12.1899 16.8372 13.0698 16.8625 13.0811C16.8431 13.1429 16.4959 14.3349 15.6536 15.5658C14.9254 16.63 14.1695 17.6903 12.9792 17.7126C11.8094 17.7339 11.4333 17.0187 10.0958 17.0187C8.75872 17.0187 8.34092 17.6903 7.2335 17.7339C6.08432 17.7775 5.20921 16.5829 4.475 15.5227C2.97482 13.3537 1.8283 9.3936 3.36772 6.72046C4.13244 5.39296 5.49932 4.55244 6.98277 4.53079C8.11114 4.50927 9.17624 5.28988 9.866 5.28988C10.5553 5.28988 11.8497 4.35107 13.2103 4.48888C13.78 4.51265 15.3789 4.71894 16.4056 6.22194C16.3231 6.27327 14.4979 7.33583 14.5177 9.54618ZM12.3193 3.05409C12.9294 2.31566 13.34 1.28741 13.2281 0.264648C12.3486 0.299945 11.2852 0.850633 10.6545 1.58877C10.0892 2.24226 9.59417 3.28851 9.72763 4.29102C10.7079 4.36696 11.7092 3.79293 12.3193 3.05409Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span>App store</span>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className="absolute bg-black bg-opacity-30 z-10 p-12 pr-5 top-2 right-0 group">
<div className="shadow-normal border rounded-lg bg-white w-[200px] hidden">
    <div className="flex items-center gap-2 p-2 hover:bg-customsecondary-light opacity-70 hover:opacity-100 transition-all ">
        <Settings /> <span>Settings</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-customsecondary-light opacity-70 hover:opacity-100 transition-all ">
        <Flag /> <span>Report Issue</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-customsecondary-light opacity-70 hover:opacity-100 transition-all ">
        <LogOut /> <span>Sign Out</span>
    </div>
</div>
</div> */
}
