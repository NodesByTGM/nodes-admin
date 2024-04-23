/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ArrowRight } from "react-feather";
// import { Link } from "react-router-dom";
// import AppConfig from "../../utilities/config";

function TrendingItem({ className, data }: { className?: string; data?: any }) {
  return (
    <div className="">
      {" "}
      <div
        className={`${className} p-6 !h-[320px] rounded-lg bg-cover bg-center text-white`}
        style={{ backgroundImage: `url('/img/checkcards.png')` }}
      >
        <div className="h-full  w-full flex flex-col gap-4 items-start text-start text-[#ffffff] text-base">
          
          <div className="mt-[60px] w-full max-h-[24px]">
            <p className="font-medium  truncate">{data?.source?.name} </p>
          </div>
          <div className="w-full ">
            {" "}
            <p className="font-normal ">
              {data?.title?.length > 300
                ? data?.title?.slice(0, 300) + "..."
                : data?.title}{" "}
            </p>
          </div>
        </div>
        <div className="">
          {/* <div className="cursor-pointer flex gap-2 items-center text-md">
       <Link to={`${AppConfig.PATHS.Dashboard.Posts.Base}/hbjhbjshbjd`}>
         <span>Learn more</span>
       </Link>
       <ArrowRight className="w-4 mt-[2px]" />
     </div> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
