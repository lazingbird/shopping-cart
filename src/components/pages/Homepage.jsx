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
      <header className="">
        <Navbar focus={"Home"}></Navbar>
        <div className="flex w-full justify-center bg-gray-200">
          <ImageCarousel autoSlide={true}>
            {imageCarouselData.map((data, index) => (
              <img key={index + 50} src={data.image}></img>
            ))}
          </ImageCarousel>
        </div>
      </header>
      <main className="w-fit-content odd:scale-120 flex flex-col items-center">
        <div className="w-9/12">
          <h3 className="mb-1 mt-12 w-9/12 self-start text-left text-2xl font-bold ">
            Mais vendidos
          </h3>
        </div>
        <SmallImageCarousel data={smallImageCarouselData}>
          {smallImageCarouselData.map((data, index) => (
            <>
              <img className="w-ful" key={index + 10} src={data.image}></img>
            </>
          ))}
        </SmallImageCarousel>
      </main>
    </>
  );
};

export default Homepage;
