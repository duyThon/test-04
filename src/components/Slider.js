import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import SliderPC from "../assets/slider-pc.jpg";
import SliderMB from "../assets/slider-mb.jpg";

const slides = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  const goToSlide = (index) => {
    setCurrentSlide(index);
    gsap.to(sliderRef.current, {
      x: -index * window.innerWidth,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % slideCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative top-[60px] md:top-0 w-screen h-[180px] md:h-[450px] overflow-hidden">
      <div ref={sliderRef} className="flex w-[900vw] h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-screen h-full flex-shrink-0 relative"
          >
            <img
              src={SliderMB}
              className="w-full h-full object-cover block md:hidden"
            />
            <img
              src={SliderPC}
              className="w-full h-full object-cover hidden md:block"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-[8px] md:bottom-[12px] left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`
        transition-all duration-300 rounded-[20px]
        ${currentSlide === idx ? "bg-[#FFC700]" : "bg-white/60"}
        w-[16px] h-[4px] md:w-[28px] md:h-[4px]
      `}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
