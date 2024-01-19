import { v4 as uuidv4 } from "uuid";

import Navbar from "../Navbar/Navbar";
import Carousel from "../carousels/Carousel";
import CarouselImage from "../carousels/CarouselImage";

import imageCarouselData from "../../data/imageCarouselData";

const HomeHeader = () => {
  return (
    <>
      <Navbar focus={"Home"}></Navbar>
      <div className="flex w-full justify-center bg-gray-200">
        <Carousel autoSlide={true}>
          {imageCarouselData.map((data, index) => (
            <CarouselImage
              key={uuidv4()}
              data={data}
              index={index}
              onlyImage={true}
            ></CarouselImage>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeHeader;
