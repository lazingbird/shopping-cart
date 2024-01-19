import Navbar from "../navbar/Navbar";
import ImageCarousel from "../carousel/ImageCarousel";
import SmallImageCarousel from "../carousel/SmallImageCarousel";

import imageCarouselData from "../../data/imageCarouselData";
import smallImageCarouselData from "../../data/smallImageCarouselData";

import { ShoppingCart } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSteam,
  faWindows,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

const ImageContainer = (index, data) => {
  return;
};

const Homepage = () => {
  return (
    <>
      <header>
        <Navbar focus={"Home"}></Navbar>
        <div className="flex w-full justify-center bg-gray-200">
          <ImageCarousel autoSlide={true}>
            {imageCarouselData.map((data, index) => (
              <img key={index + 50} src={data.image}></img>
            ))}
          </ImageCarousel>
        </div>
      </header>
      <main className="flex flex-col  items-center">
        <div className="flex min-w-80 sm:w-8/12">
          <h3 className="mb-1  mt-10 self-start text-2xl font-bold ">
            Mais vendidos
          </h3>
        </div>
        <div className="flex w-11/12 items-center justify-center rounded-xl">
          <SmallImageCarousel data={smallImageCarouselData}>
            {smallImageCarouselData.map((data, index) => (
              <div key={index + 10} className="">
                <img className="rounded-t-md" src={data.image}></img>
                <div className="flex h-20 items-center justify-between  rounded-b-md bg-gray-950 p-3 text-white">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <FontAwesomeIcon icon={faSteam} />
                      <FontAwesomeIcon icon={faWindows} />
                    </div>
                    <p className="text-xs">{data.title}</p>
                  </div>
                  <button className="text-md flex items-center justify-center gap-3 rounded-md bg-gray-700  p-3 font-extrabold text-white shadow-lg hover:bg-gray-600 hover:text-white">
                    <ShoppingCart size={20} />
                    R$ 199,90
                  </button>
                </div>
              </div>
            ))}
          </SmallImageCarousel>
        </div>
      </main>
    </>
  );
};

export default Homepage;
