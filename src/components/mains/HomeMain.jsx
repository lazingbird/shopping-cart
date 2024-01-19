import { v4 as uuidv4 } from "uuid";

import SmallCarousel from "../carousels/SmallCarousel";
import CarouselImage from "../carousels/CarouselImage";
import smallImageCarouselData from "../../data/smallImageCarouselData";

const HomeMain = () => {
  return (
    <>
      <section className=" mt-10 hidden flex-col items-center justify-center lg:flex">
        <div className="mark-grid w-8/12 items-center justify-center">
          <img
            className="h-full w-full cursor-pointer"
            src="src/assets/playstation-cartão.png"
          />
          <img
            className="h-full w-full cursor-pointer"
            src="src/assets/xbox-cartão.png"
            alt=""
            srcset=""
          />
          <img
            className="col-span-2 cursor-pointer"
            src="src/assets/freefire-créditos.gif"
          />
        </div>
      </section>
      <section className="flex w-full flex-col items-center sm:w-11/12">
        <div className=" flex sm:w-9/12">
          <h3 className=" mb-1 mt-10 self-start text-3xl font-bold ">
            MAIS VENDIDOS
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
