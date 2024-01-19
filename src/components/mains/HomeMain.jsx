import { v4 as uuidv4 } from "uuid";

import SmallCarousel from "../carousels/SmallCarousel";
import CarouselImage from "../carousels/CarouselImage";
import smallImageCarouselData from "../../data/smallImageCarouselData";

const HomeMain = () => {
  return (
    <>
      <section className=" mt-10 hidden flex-col justify-center lg:flex">
        <h3 className="mx-64 mb-1 mt-10 self-start text-3xl font-bold"></h3>
        <div className="max-w-8/12 flex justify-center gap-4">
          <img
            className="h-full w-2/12 cursor-pointer"
            src="src/assets/playstation-cartão.png"
            alt=""
            srcset=""
          />
          <img
            className="h-full w-2/12 cursor-pointer"
            src="src/assets/xbox-cartão.png"
            alt=""
            srcset=""
          />
          <img
            className="h-full w-4/12 cursor-pointer"
            src="src/assets/freefire-créditos.gif"
            alt=""
            srcset=""
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
