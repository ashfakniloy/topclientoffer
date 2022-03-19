import { useState } from "react";
import {
  FaMoneyCheckAlt,
  FaGlobeAmericas,
  FaHome,
  FaHeadset,
  FaChartBar,
  FaDollarSign,
} from "react-icons/fa";

function Highlights() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="px-2 py-8 lg:py-24 ">
      <h1 className="text-custom-red text-center text-[53px] lg:text-[61px] font-bold uppercase">
        Highlights
      </h1>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center ">
        <div className="flex flex-col gap-6 py-16 items-center">
          <div className="text-5xl">
            <FaMoneyCheckAlt />
          </div>

          <p className="text-[24px] lg:text-[35px] font-semibold">
            1000+ offers
          </p>
        </div>

        <div className="flex flex-col gap-6 py-16 items-center ">
          <div className="text-5xl">
            <FaGlobeAmericas />
          </div>

          <p className="text-[24px] lg:text-[35px] font-semibold">
            Global coverage
          </p>
        </div>
        <div className="flex flex-col gap-6 py-16 items-center ">
          <div className="text-5xl">
            <FaHome />
          </div>

          <p className="text-[24px] lg:text-[35px] font-semibold">
            In-house technologies
          </p>
        </div>
        <div className="flex flex-col gap-6 py-16 items-center ">
          <div className="text-5xl">
            <FaHeadset />
          </div>

          <p className="text-[24px] lg:text-[35px] font-semibold">
            24/7 support
          </p>
        </div>
        <div className="flex flex-col gap-6 py-16 items-center ">
          <div className="text-5xl">
            <FaChartBar />
          </div>

          <p className="text-[24px] lg:text-[35px] font-semibold">
            Real-time stats
          </p>
        </div>
        <div className="flex flex-col gap-6 py-16 items-center ">
          <div className="text-5xl">
            <FaDollarSign />
          </div>

          <p className="text-[24px] lg:text-[35px] font-semibold">
            Fast payment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
