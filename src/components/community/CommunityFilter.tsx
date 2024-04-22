import React from "react";
import { SearchComponent, Button, Switch } from "../../components";
import { useCommunityContext } from "../../context/hooks";
import { Filter } from "react-feather";

export default function CommunityFilter() {
  const { peopleOrBrand, setPeopleOrBrand } = useCommunityContext();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {" "}
          <div className="w-full xl:min-w-[480px] max-w-[480px] h-[48px]">
            <SearchComponent placeholder="ex: acting" />
          </div>
          <Button className="!py-0 h-[48px] max-w-max">Search</Button>
          <Button className="!py-0 h-[48px] text-base !text-primary font-medium max-w-max !border !border-[#EFEFEF] !bg-[#ffffff]">
            <div className="flex items-center">
              {" "}
              <Filter className="size-[13px]" />
              <span className="ml-2">Filter view</span>
            </div>
          </Button>
        </div>

        <div className="flex gap-4 h-[48px] items-center px-4 rounded-lg text-base !text-primary font-medium max-w-max !border !border-[#EFEFEF] !bg-[#ffffff]">
          <span onClick={() => setPeopleOrBrand("people")} className="cursor-pointer text-primary text-base font-medium">People</span>
          <Switch
          color={'bg-secondary'}
            value={peopleOrBrand.toLowerCase() === "brand" ? true : false}
            setValue={(value) => {
              value === true
                ? setPeopleOrBrand("brand")
                : setPeopleOrBrand("people");
            }}
          />
          <span onClick={() => setPeopleOrBrand("brand")} className="cursor-pointer text-primary text-base font-medium">Brand</span>
        </div>
      </div>
    </div>
  );
}
