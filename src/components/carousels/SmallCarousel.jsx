import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight, ShoppingCart } from "react-feather";

const SmallCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 7000,
}) => {
  const [current, setCurrent] = useState(0);
  const [hideLeftChevron, setHideLeftChevron] = useState(true);
  const [hideRightChevron, setHideRightChevron] = useState(false);

  const handlePrev = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    if (current === 1) {
      return setHideLeftChevron(true);
    }
    setHideRightChevron(false);
  };

  const handleNext = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    if (current === 3) {
      return setHideRightChevron(true);
    }
    setHideLeftChevron(false);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <ChevronLeft
        onClick={handlePrev}
        className="text-roxoMuitoJogo min-w-10 cursor-pointer pl-3 hover:scale-110"
        size={30}
        style={{ visibility: ` ${hideLeftChevron ? "hidden" : "visible"}` }}
      />
      <div className=" wrapper flex w-9/12  overflow-hidden">
        <div
          className="slide flex gap-5 shadow-3xl transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 12.6}%) ` }}
        >
          {slides}
        </div>
      </div>
      <ChevronRight
        onClick={handleNext}
        className="text-roxoMuitoJogo min-w-10 cursor-pointer pr-3 hover:scale-110 "
        size={30}
        style={{ visibility: ` ${hideRightChevron ? "hidden" : "visible"}` }}
      />
    </>
  );
};

export default SmallCarousel;
