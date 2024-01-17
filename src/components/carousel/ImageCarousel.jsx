import { useState } from "react";

import SlideContainer from "./SlideContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import imageCarouselData from "../../data/imageCarouselData";

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  const imageTransition = () => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  const handleNext = () => {
    imageTransition();
    if (imageIndex + 1 === imageCarouselData.length) {
      return setImageIndex(0);
    }
    setImageIndex(imageIndex + 1);
  };

  const handlePrev = () => {
    imageTransition();
    if (imageIndex === 0) {
      return setImageIndex(imageCarouselData.length - 1);
    }
    setImageIndex(imageIndex - 1);
  };
  return (
    <section className="display: flex items-center justify-center pt-28">
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
    </section>
  );
};

export default ImageCarousel;
