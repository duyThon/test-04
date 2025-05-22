import React, { useRef, useState } from "react";
import { gsap } from "gsap";

import LeftIcon from "../assets/left-icon.png";
import RightIcon from "../assets/right-icon.png";
import Img1 from "../assets/section1/img1.png";
import Img2 from "../assets/section1/img2.png";
import Img3 from "../assets/section1/img3.png";
import Img4 from "../assets/section1/img4.png";
import Img5 from "../assets/section1/img5.png";
import Img6 from "../assets/section1/img6.png";
import Img7 from "../assets/section1/img7.png";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
];

const Section1 = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getStep = () => {
    const isMobile = window.innerWidth < 768;
    const itemWidth = isMobile ? 102 : 180;
    const gap = isMobile ? 12 : 16;
    return itemWidth + gap;
  };

  const slideTo = (index) => {
    const maxIndex = images.length - 6;
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);

    const step = getStep();
    gsap.to(trackRef.current, {
      x: -clamped * step,
      duration: 0.7,
      ease: "expo.out",
    });
  };

  return (
    <>
      <div className="relative top-[60px] md:top-0 section1 py-[40px] md:py-[80px] px-[20px] md:px-[100px] lg:px-[236px] space-y-[8px]">
        <div className="section1-header flex items-center justify-between">
          <span className="uppercase text-[24px] md:text-[32px] font-cervino text-yellow">
            New NFT Collections
          </span>
          <div className="flex items-center space-x-[8px]">
            <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-[8px] md:rounded-[12px] cursor-pointer overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.3]"
                src={LeftIcon}
                onClick={() => slideTo(currentIndex - 1)}
              />
            </div>
            <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-[8px] md:rounded-[12px] cursor-pointer overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.3]"
                src={RightIcon}
                onClick={() => slideTo(currentIndex + 1)}
              />
            </div>
          </div>
        </div>
        <div className="section1-container">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-[8px] md:gap-[16px] transition-transform will-change-transform"
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-[102px] h-[140px] rounded-[6.86px] md:w-[180px] md:h-[245px] md:rounded-[12px] overflow-hidden flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Item ${idx}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.1]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
