import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import AppConfig from "../../utilities/config";

function TrendingItem() {
  return (
    <div
      className="h-[300px] w-full md:h-[400px]  rounded bg-cover bg-center text-white shadow-overlay p-5 flex flex-col justify-end"
      style={{ backgroundImage: `url('/img/checkcards.png')` }}
    >
      <div className="">
        <h3 className="w-[220px] md:w-[300px] text-ellipsis text-nowrap overflow-hidden text-xl font-medium h-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </h3>
        <p className="w-[220px] md:w-[300px] text-ellipsis text-nowrap overflow-hidden font-medium h-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
        <div className="cursor-pointer flex gap-2 items-center text-md">
          <Link to={`${AppConfig.PATHS.Dashboard.Posts.Base}/hbjhbjshbjd`}>
            <span>Learn more</span>
          </Link>
          <ArrowRight className="w-4 mt-[2px]" />
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
