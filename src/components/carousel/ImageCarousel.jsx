import { useState, useEffect, useRef } from "react";

import SlideContainer from "./SlideContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import imageCarouselData from "../../data/imageCarouselData";

const Dots = ({ imageIndex, setImageIndex, isLoaded, setIsLoaded }) => {
  const dots = [0, 1, 2, 3];

  const imageTransition = () => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  const handleClickDot = (dot) => {
    imageTransition();
    setImageIndex(dot);
  };

  return (
    <div className="flex gap-1">
      {dots.map((dot) => (
        <span
          key={dot}
          onClick={() => handleClickDot(dot)}
          className={`mt-4 cursor-pointer select-none text-xs transition delay-100 duration-200 ease-in-out hover:opacity-70 ${isLoaded ? "opacity-100" : "opacity-50"} ${imageIndex === dot ? "text-purple-900" : "text-slate-300 "}`}
        >
          ⬤
        </span>
      ))}
    </div>
  );
};

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  const imageTransition = () => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 120);
  };

  const handleNext = () => {
    imageTransition();
    if (imageIndex + 1 === imageCarouselData.length) {
      return setImageIndex(0);
    }
    return setImageIndex(imageIndex + 1);
  };

  const handlePrev = () => {
    imageTransition();
    if (imageIndex === 0) {
      return setImageIndex(imageCarouselData.length - 1);
    }
    return setImageIndex(imageIndex - 1);
  };
  return (
    <section className="flex  flex-col items-center justify-center pt-28">
      <div className="flex items-center ">
        <FontAwesomeIcon
          className="size-12 cursor-pointer select-none hover:text-purple-900"
          icon={faChevronLeft}
          onClick={handlePrev}
        ></FontAwesomeIcon>
        {imageCarouselData.map((data, index) => (
          <SlideContainer
            key={index}
            data={data}
            index={index}
            imageIndex={imageIndex}
            isLoaded={isLoaded}
          ></SlideContainer>
        ))}
        <FontAwesomeIcon
          onClick={handleNext}
          className="size-12 cursor-pointer select-none hover:text-purple-900"
          icon={faChevronRight}
        ></FontAwesomeIcon>
      </div>
      <Dots
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
      ></Dots>
    </section>
  );
};

export default ImageCarousel;
