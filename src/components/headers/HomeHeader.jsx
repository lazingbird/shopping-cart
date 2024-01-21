import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import games from "../../services/games";

import { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import Carousel from "../carousels/Carousel";
import CarouselImage from "../carousels/CarouselImage";

import fakeProducts from "../../data/fakeProducts";

const HomeHeader = () => {
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
    return;
  }
  return (
    <>
      <Navbar focus={"Home"}></Navbar>
      <div className="flex w-full justify-center bg-gray-200">
        <Carousel games={carouselData} autoSlide={true}>
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
    </>
  );
};

export default HomeHeader;
