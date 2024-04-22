import { Outlet } from "react-router-dom";
import {OnboardingCarousel} from '../components'
function Auth() {
  return (
    <div className="flex min-h-[100vh] max-h-[100vh]  w-full justify-center">
      <div className="bg-[#ffffff] px-20 pb-20 pt-[60px] lg:w-1/2">
        <Outlet />
      </div>
      <OnboardingCarousel />
      {/* <div className="bg-light auth-onboarding-bgImg p-5 w-1/2 lg:block hidden">
        <img
          src="/imgUi/calm-attractive-fashion-designers-work-cozy-office-darkskinned-lady-paint-shorthaired-woman-holds-coffee-cup.jpg"
          alt=""
          className="h-full w-full hidden"
        />
        <div className="flex flex-col justify-center  items-center h-full">
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
      </div> */}
    </div>
  );
}

export default Auth;
