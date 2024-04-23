/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

import {
  HeaderAndDescription,
  TrendingItem,
  MovieItem,
  EventItem,
  JobItem,
} from "../../components";
import clsx from "clsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/ItemsCarousel.scss";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "react-feather";

// Import Swiper styles
import "swiper/css";

type IItemsCarousel = {
  canViewMovieDetails?: boolean;
  canViewJob?: boolean;
  isBusiness?: boolean;
  trend?: boolean;
  movie?: boolean;
  event?: boolean;
  job?: boolean;
  children?: ReactNode | ReactNode[];
  borderBottom?: boolean;
  openCommunity?: boolean;
  viewAll?: boolean;
  seeMore?: boolean;
  title?: string;
  description?: string;
  data?: Array<any>;
  navigateTo?: () => void;
  refetchJobs?: () => void;
  refetchEvents?: () => void;
};

export default function ItemsCarousel({
  data = [],
  canViewMovieDetails = false,
  canViewJob = false,
  isBusiness = false,
  trend,
  movie,
  event,
  job,
  openCommunity,
  borderBottom,
  viewAll,
  seeMore,
  title = "",
  description = "",
  navigateTo,
  children,
  refetchJobs,
  refetchEvents,
}: IItemsCarousel) {
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <HeaderAndDescription
          seeMore={seeMore}
          navigateTo={navigateTo}
          openCommunity={openCommunity}
          viewAll={viewAll}
          title={title}
          description={description}
          titleClass=" text-[18px]"
        />
      </div>
      <div
        className={`${borderBottom ? " mb-10 border-b border-[#D6D6D6]" : ""} `}
      ></div>
      <div className="itemsSwiper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
            renderBullet: (_, className) => {
              return `<span class="${clsx(
                "h-2 w-2 rounded-full bg-grey-dark block",
                className
              )}"></span>`;
            },
          }}
          spaceBetween={40}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item, i) => (
            <div className="w-full" key={i}>
              <SwiperSlide>
                {trend || movie || event || job ? (
                  <div className="">
                    {trend && (
                        <TrendingItem
                          data={item}
                          className={"!w-full h-full"}
                        />
                    )}
                    {movie && (
                      <MovieItem
                        data={item}
                        canViewMovieDetails={canViewMovieDetails}

                        // className={"!w-full h-full"}
                      />
                    )}
                    {event && (
                      <EventItem
                        refetchEvents={() => refetchEvents && refetchEvents()}
                        data={item}
                        isBusiness={isBusiness}
                        className={"!w-full h-full"}
                      />
                    )}
                    {job && (
                      <JobItem
                        canViewJob={canViewJob}
                        data={item}
                        refetchJobs={() => refetchJobs && refetchJobs()}
                        isBusiness={isBusiness}
                        className={"!w-full h-full"}
                      />
                    )}
                  </div>
                ) : (
                  <EventItem className={"!w-[310px]"} />
                )}
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className=" w-full  bottom-0 left-0 flex justify-between items-center mt-10 ">
          <div className="custom-swiper-pagination flex gap-2 items-center"></div>

          <div className="custom-swiper-navigation flex items-center gap-[10px]">
            <div className="prev cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center text-grey-dark">
              <ChevronLeft className="text-grey-dark text-2xl" />
            </div>
            <div className="next cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center text-grey-dark">
              <ChevronRight className=" text-grey-dark text-2xl" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
