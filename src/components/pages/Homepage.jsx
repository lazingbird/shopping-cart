import Navbar from "../navbar/Navbar";
import ImageCarousel from "../carousel/ImageCarousel";

const Homepage = () => {
  return (
    <>
      <header className="">
        <Navbar focus={"Home"}></Navbar>

        <ImageCarousel></ImageCarousel>
      </header>
    </>
  );
};

export default Homepage;
