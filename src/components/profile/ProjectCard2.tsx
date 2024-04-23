/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
type IProjectsCard = {
  project: any;
  setProjectDetailsModal?: (e) => void;
  setProjectDetails?: (e) => void;
};
export default function ProjectsCard2({
  project,
  setProjectDetailsModal,
  setProjectDetails,
}: IProjectsCard) {
  return (
    <div className="h-full">
      {/* <pre className="text-blue-400">{JSON.stringify(project, null, 2)}</pre> */}
      <div className="h-full text-[#000000] font-normal text-sm border border-[#EFEFEF] rounded-[4px] p-4 flex  gap-4">
        <img
          className="w-1/2 rounded-[4px] h-[160px]"
          src={project?.thumbnail?.url}
          alt=""
        />
        <div className="flex flex-col  w-1/2 text-[#000000]">
          <h3 className="mb-2 font-medium text-base truncate">{project.name}</h3>
          <div className="max-h-[63px] max-w-full"></div>
          <p className="w-full truncate text-sm font-normal">
            {project.description}
          
          </p>
          <span
            onClick={() => {
              setProjectDetails && setProjectDetails(project);
              setProjectDetailsModal && setProjectDetailsModal(true);
            }}
            className="underline !cursor-pointer mt-auto ml-auto text-customprimary"
          >
            See more
          </span>
        </div>
      </div>
    </div>
  );
}
