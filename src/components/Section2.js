import React from "react";

import LeftIcon from "../assets/left-icon.png";
import RightIcon from "../assets/right-icon.png";
import Calendar from "../assets/section2/calendar.png";
import Hot from "../assets/section2/hot.png";
import Promotion from "../assets/section2/promotion.png";

const Section2 = () => {
  return (
    <>
      <div className="relative top-[60px] md:top-0 section2 pb-[40px] md:pb-[80px] px-[20px] md:px-[100px] lg:px-[236px] grid grid-cols-12 gap-[24px]">
        <div className="col-span-12 lg:col-span-6">
          <div className="calendar flex items-center justify-between pb-[8px]">
            <span className="uppercase text-[24px] md:text-[32px] font-cervino text-yellow">
              NFT Drops Calendar
            </span>
            <div className="flex items-center space-x-[8px]">
              <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-[8px] md:rounded-[12px] cursor-pointer overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.3]"
                  src={LeftIcon}
                />
              </div>
              <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-[8px] md:rounded-[12px] cursor-pointer overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.3]"
                  src={RightIcon}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="h-[240px] rounded-[8px] md:rounded-[12px] overflow-hidden flex-shrink-0 ">
              <img
                src={Calendar}
                className="w-full h-full object-fill transition-transform duration-300 hover:scale-[1.1]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <div className="hot-nft text-start pb-[8px]">
            <span className="uppercase text-[24px] md:text-[32px] font-cervino text-yellow">
              HOT NFT
            </span>
          </div>
          <div>
            <div className="h-[167px] md:h-[240px] md:w-[240px] rounded-[8px] md:rounded-[12px] overflow-hidden flex-shrink-0 ">
              <img
                src={Hot}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.1]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <div className="promotion text-start pb-[8px]">
            <span className="uppercase text-[24px] md:text-[32px] font-cervino text-yellow">
              PROMOTION
            </span>
          </div>
          <div>
            <div className="h-[167px] md:h-[240px] md:w-[240px] rounded-[8px] md:rounded-[12px] overflow-hidden flex-shrink-0 ">
              <img
                src={Promotion}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.1]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
