import React from "react";
import SpacesCard from "./SpacesCard";
import { useNavigate } from "react-router-dom";
export default function SpacesGrid({ title, data }) {
  const navigate = useNavigate();

  const handleNav = (id) => {
    if(id){
      navigate(`/spaces/${id}`);
    }
  };

  return (
    <div>
      <h3 className="font-medium text-base text-[#212121] mb-6">{title}</h3>
      <div className="grid grid-cols-3 gap-6">
        {data?.map((item) => (
          <div
            onClick={() => handleNav(item?.id)}
            key={item?.id}
            className="cursor-pointer"
          >
            <SpacesCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
