import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight, ShoppingCart } from "react-feather";

const ImageCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 7000,
}) => {
  const [current, setCurrent] = useState(0);

  const handleDot = (index) => {
    setCurrent(index);
  };

  const handlePrev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const handleNext = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="relative w-full overflow-hidden md:w-7/12 lg:w-5/12">
      <div
        className=" flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4 text-purple-800">
        <button
          onClick={handlePrev}
          className="rounded-full bg-white/60  p-1 shadow-xl hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={handleNext}
          className="hover:bgwhite rounded-full bg-white/60 p-1 shadow-xl hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex  items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDot(index)}
              className={`h-2 w-2 cursor-pointer rounded-full bg-white transition-all hover:bg-opacity-80 ${current === index ? "p-1.5" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 right-8  scale-75 md:scale-100 ">
        <button className="text-md flex items-center justify-center gap-3 rounded-md bg-white  p-4 font-extrabold text-purple-800 shadow-lg hover:bg-purple-800 hover:text-white">
          <ShoppingCart />
          R$ 199,90
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
