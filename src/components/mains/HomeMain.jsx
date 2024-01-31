import { v4 as uuidv4 } from "uuid";
import games from "../../services/games";

import { useState, useEffect, useContext } from "react";

import SmallCarousel from "../carousels/SmallCarousel";
import CarouselImage from "../carousels/CarouselImage";
import fakeProducts from "../../data/fakeProducts";
import Footer from "../Footer/Footer";
import { ShopContext } from "../../ShopContext";

const HomeMain = () => {
  const [smallCarouselData, setSmallCarouselData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        fakeProducts.smallCarouselFakeProducts.map(async (item) => {
          let request = await games.getById(item.rawg_id);
          return {
            ...item,
            data: request,
          };
        }),
      );
      setSmallCarouselData(result);
    };
    fetchData();
  }, []);

  if (smallCarouselData === null) {
    return;
  }
  return (
    <>
      <main className="flex flex-col  items-center">
        <section className=" mt-10 hidden flex-col items-center justify-center lg:flex">
          <div className="mark-grid w-8/12 items-center justify-center">
            <img
              className="h-full w-full cursor-pointer"
              src="src/assets/playstation-cartão.png"
              alt="Logo da Playstation informando a possibilidade de parcelar os produtos da marca em até 12x"
            />
            <img
              className="h-full w-full cursor-pointer"
              src="src/assets/xbox-cartão.png"
              alt="Logo da Xbox informando a possibilidade de parcelar os produtos da marca em até 12x"
            />
            <img
              className="col-span-2 cursor-pointer"
              src="src/assets/freefire-créditos.gif"
              alt="Imagem promocional de Freefire informando bônus de 10% de sua moeda na compra"
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
            <SmallCarousel data={smallCarouselData}>
              {smallCarouselData.map((data, index) => (
                <CarouselImage
                  key={uuidv4()}
                  data={data}
                  index={index}
                ></CarouselImage>
              ))}
            </SmallCarousel>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomeMain;
