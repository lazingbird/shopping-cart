import { v4 as uuidv4 } from "uuid";

import SmallCarousel from "../carousels/SmallCarousel";
import CarouselImage from "../carousels/ImgSmallCarousel";
import smallImageCarouselData from "../../data/smallImageCarouselData";

const HomeMain = () => {
  return (
    <>
      <div className="sm: flex min-w-80 sm:w-8/12">
        <h3 className=" mb-1 mt-10 self-start text-2xl font-bold ">
          Mais vendidos
        </h3>
      </div>
      <div className="flex w-11/12 items-center justify-center">
        <SmallCarousel data={smallImageCarouselData}>
          {smallImageCarouselData.map((data, index) => (
            <CarouselImage
              key={uuidv4()}
              data={data}
              index={index}
            ></CarouselImage>
          ))}
        </SmallCarousel>
      </div>
    </>
  );
};

export default HomeMain;
