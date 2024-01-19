import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight, ShoppingCart } from "react-feather";

const SmallImageCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 7000,
}) => {
  const [current, setCurrent] = useState(0);
  const [hideLeftChevron, setHideLeftChevron] = useState(true);
  const [hideRightChevron, setHideRightChevron] = useState(false);

  const handleDot = (index) => {
    setCurrent(index);
  };

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
    <div className="flex items-center justify-center">
      <ChevronLeft
        onClick={handlePrev}
        className="cursor-pointer text-purple-700 hover:scale-110"
        size={35}
        style={{ visibility: ` ${hideLeftChevron ? "hidden" : "visible"}` }}
      />
      <div className="h-fit-content flex w-9/12 flex-row overflow-hidden">
        <div
          className=" flex h-44 gap-2 shadow-3xl transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 22.5}%) ` }}
        >
          {slides}
        </div>
      </div>
      <ChevronRight
        onClick={handleNext}
        className="cursor-pointer text-purple-700 hover:scale-110 "
        size={35}
        style={{ visibility: ` ${hideRightChevron ? "hidden" : "visible"}` }}
      />
    </div>
  );
};

export default SmallImageCarousel;
