import { v4 as uuidv4 } from "uuid";
import games from "../../services/games";

import { useState, useEffect } from "react";
import { Suspense } from "react";

import Navbar from "../Navbar/Navbar";
import Carousel from "../carousels/Carousel";
import CarouselImage from "../carousels/CarouselImage";

import fakeProducts from "../../data/fakeProducts";

const HomeHeader = ({ setCart, cart }) => {
  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        fakeProducts.carouselFakeProducts.map(async (item) => {
          let request = await games.getById(item.rawg_id);
          return {
            ...item,
            data: request,
          };
        }),
      );
      setCarouselData(result);
    };
    fetchData();
  }, []);

  if (carouselData === null) {
    return <Navbar focus={"Home"}></Navbar>;
  }
  return (
    <header>
      <Navbar focus={"Home"}></Navbar>
      <div className="flex w-full justify-center bg-gray-200">
        <Carousel
          setCart={setCart}
          cart={cart}
          games={carouselData}
          autoSlide={true}
        >
          {carouselData.map((object, index) => (
            <CarouselImage
              key={uuidv4()}
              data={object}
              index={index}
              onlyImage={true}
            ></CarouselImage>
          ))}
        </Carousel>
      </div>
    </header>
  );
};

export default HomeHeader;
