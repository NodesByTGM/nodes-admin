/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import AppConfig from "../../utilities/config";
import { Modal, RateComponent } from "../../components";
import { CiStar } from "react-icons/ci";

function MovieItem({
  data,
  canViewMovieDetails,
}: {
  data?: any;
  canViewMovieDetails?: boolean;
}) {
  // {console.log(data.backdrop_path)}
  const [rateModal, setRateModal] = useState(false);

  return (
    <div
      className="h-full w-full rounded bg-cover bg-center text-white pt-[298px]"
      style={{ backgroundImage: `url('/img/movieImg.png')` }}
    >
      {/* <pre className="  flex flex-col text-wrap text-start">
        {" "}
        {JSON.stringify(data, null, 2)}
      </pre> */}
      {/* backdrop_path , vote_average, votebutton, original_name */}
      <div className="rounded text-start bg-darkgradient p-5 h-full  flex flex-col gap-10">
        <div className="flex gap-4">
          {" "}
          <div className="flex items-center gap-2 ">
            <div className="">
              {" "}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7299 2.51014L14.4899 6.03014C14.7299 6.52014 15.3699 6.99014 15.9099 7.08014L19.0999 7.61014C21.1399 7.95014 21.6199 9.43014 20.1499 10.8901L17.6699 13.3701C17.2499 13.7901 17.0199 14.6001 17.1499 15.1801L17.8599 18.2501C18.4199 20.6801 17.1299 21.6201 14.9799 20.3501L11.9899 18.5801C11.4499 18.2601 10.5599 18.2601 10.0099 18.5801L7.01991 20.3501C4.87991 21.6201 3.57991 20.6701 4.13991 18.2501L4.84991 15.1801C4.97991 14.6001 4.74991 13.7901 4.32991 13.3701L1.84991 10.8901C0.389909 9.43014 0.859909 7.95014 2.89991 7.61014L6.08991 7.08014C6.61991 6.99014 7.25991 6.52014 7.49991 6.03014L9.25991 2.51014C10.2199 0.600137 11.7799 0.600137 12.7299 2.51014Z"
                  fill="#D6DE21"
                  stroke="#D6DE21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="max-w-full text-ellipsis text-nowrap overflow-hidden text-xl font-medium ">
              {data?.vote_average.toFixed(1)}
            </span>
          </div>
          <div
            onClick={() => setRateModal(true)}
            className="cursor-pointer flex items-center justify-center"
          >
            <CiStar className="size-[30px]" />
          </div>
        </div>
        <p className="max-w-full text-ellipsis text-nowrap overflow-hidden font-medium h-[30px]">
          {data?.original_name ? data?.original_name : data?.original_title}
        </p>
        {canViewMovieDetails && (
          <div className="cursor-pointer flex gap-2 items-center text-md">
            <Link to={`${AppConfig.PATHS.Dashboard.Posts.Base}/hbjhbjshbjd`}>
              <span>Learn more</span>
            </Link>
            <ArrowRight className="w-4 mt-[2px]" />
          </div>
        )}
      </div>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={rateModal}
        setOpen={setRateModal}
      >
        <RateComponent
          action={() => {
            // deleteRequest(data?.id);
          }}
          isLoading={false}
          closeModal={() => setRateModal(false)}
        />
      </Modal>
    </div>
  );
}

export default MovieItem;
