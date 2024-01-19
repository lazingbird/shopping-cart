import { v4 as uuidv4 } from "uuid";

import SmallCarousel from "../carousels/SmallCarousel";
import CarouselImage from "../carousels/CarouselImage";
import smallImageCarouselData from "../../data/smallImageCarouselData";

const HomeMain = () => {
  return (
    <>
      <section className="flex w-full flex-col items-center sm:w-11/12">
        <div className=" flex sm:w-9/12">
          <h3 className=" mb-1 mt-10 self-start text-2xl font-bold ">
            Mais vendidos
          </h3>
        </div>
        <div className="flex w-full  items-center justify-center">
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
      </section>
    </>
  );
};

export default HomeMain;
