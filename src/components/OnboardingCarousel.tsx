import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/less/effect-fade";
import {carouselImages} from '../utilities/'
import { Autoplay, EffectFade } from "swiper/modules";

import "../onboardingSwiper.scss";
export default function OnboardingCarousel({
  className,
}: {
  className?: string;
}) {
  
  return (
    <div
      className={`${className} onboardingSwiper relative h-full min-h-screen w-1/2 bg-gray-400`}
    >
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="h-full "
      >
        {carouselImages.map((img) => (
          <SwiperSlide key={img.id} className="h-full">
            <img src={img.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="z-[100] absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center  items-center h-full">
        <div className="bg-white p-8  rounded-[16px] max-w-[440px] flex w-full flex-col gap-6">
          <h3 className="!text-2xl !font-semibold  !text-primary">
            Join Nodes as a talent today!
          </h3>
          <p className="text-[18px] text-[#212121]">
            Supercharge your creative journey at Nodes, where you can:
          </p>
          <ol className="p-5 flex flex-col gap-y-5 ">
            <li className="list-decimal">
              Showcase your talent globally and shine.
            </li>
            <li className="list-decimal">
              Discover opportunities that match your skills.
            </li>
            <li className="list-decimal">
              Collaborate with like-minded creators, fuel creativity.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
