import Navbar from "../navbar/Navbar";
import ImageCarousel from "../carousel/ImageCarousel";
import SmallImageCarousel from "../carousel/SmallImageCarousel";

import imageCarouselData from "../../data/imageCarouselData";
import smallImageCarouselData from "../../data/smallImageCarouselData";

const ImageContainer = (index, data) => {
  return;
};

const Homepage = () => {
  return (
    <>
      <header>
        <Navbar focus={"Home"}></Navbar>
        <div className="flex justify-center bg-gray-200">
          <ImageCarousel autoSlide={true}>
            {imageCarouselData.map((data, index) => (
              <img key={index + 50} src={data.image}></img>
            ))}
          </ImageCarousel>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-8/12">
          <h3 className="mb-1 mt-12 w-9/12 self-start text-left text-2xl font-bold ">
            Mais vendidos
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <SmallImageCarousel data={smallImageCarouselData}>
            {smallImageCarouselData.map((data, index) => (
              <img key={index + 10} src={data.image}></img>
            ))}
          </SmallImageCarousel>
        </div>
      </main>
    </>
  );
};

export default Homepage;
