import React, { useState } from "react";
import {
  CarouselSection,
  HeaderAndDescription,
  WelcomeComponent,
  WelcomeCard,
  Loader,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../../api";

export default function TalentDashboard() {
  const navigate = useNavigate();
  const {
    data: jobsData,
    // refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetJobsQuery();
  const [WelcomeCardItems] = useState([
    {
      id: 1,
      text1: "Complete",
      text2: "your profile",
      icon: "/img/CompleteProfile.png",
      buttonText: "Complete profile",
      buttonLink: "/profile",
    },
    {
      id: 2,
      text1: "Find your",
      text2: "next job",
      icon: "/img/FindJob.png",
      buttonText: "Browse Jobs",
      buttonLink: "/dashboard/see-more/talent-jobs",
    },
    {
      id: 3,
      text1: "Connect",
      text2: "with others",
      icon: "/img/Connect.png",
      buttonText: "Discover",
      buttonLink: "/community",
    },
  ]);
  return (
    <div>
      <HeaderAndDescription title="Hi, Jane! Nice to have you here." />

      <div className={` h-4 mb-10 border-b border-[#D6D6D6]`}></div>

      <div className="flex flex-col gap-[64px]">
        <WelcomeComponent
          title="Welcome to Nodes!"
          description=" You now have access to a creative ecosystem, follow spaces, connect
            with the community and access job opportunities"
        >
          <div className="grid grid-cols-3 gap-6">
            {WelcomeCardItems.map((item) => (
              <div key={item.id} className="">
                <WelcomeCard
                  text1={item.text1}
                  text2={item.text2}
                  icon={item.icon}
                  buttonText={item.buttonText}
                  buttonLink={item.buttonLink}
                />
              </div>
            ))}
          </div>
        </WelcomeComponent>

        {jobsLoading && !jobsData ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}

        {(!jobsLoading && jobsData?.jobs?.length === 0) ||
        (!jobsLoading && !jobsData) ? (
          <div>
            {/* <BusinessDashboardSectionEmptyStates
                  type="job"
                  user={user}
                  addJobOrEvents={() => addJobOrEvents("job")}
                /> */}
            Nothing to see
          </div>
        ) : null}

        {!jobsLoading && jobsData && jobsData?.jobs?.length > 0 ? (
          <CarouselSection
            data={jobsData?.jobs || []}
            navigateTo={() => navigate("/dashboard/see-more/talent")}
            seeMore
            job
            title={`Jobs you have applied to`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}

        {!jobsLoading && jobsData && jobsData?.jobs?.length > 0 ? (
          <CarouselSection
            data={jobsData?.jobs || []}
            navigateTo={() => navigate("/dashboard/see-more/talent")}
            seeMore
            job
            title={`Jobs for you`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}

        <CarouselSection
          navigateTo={() => navigate("/dashboard/see-more/talent")}
          seeMore
          title={`Spaces you might like`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
        <CarouselSection
          trend
          title={`Trending events`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
      </div>
    </div>
  );
}