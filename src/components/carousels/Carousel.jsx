import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../ShopContext";

import { ChevronLeft, ChevronRight, ShoppingCart, Check } from "react-feather";

const Carousel = ({
  games,
  children: slides,
  autoSlide = false,
  autoSlideInterval = 7000,
  setCart,
  cart,
}) => {
  const [current, setCurrent] = useState(0);

  const handleDot = (index) => {
    setCurrent(index);
  };

  const handlePrev = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const handleNext = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const handleCart = (product) => {
    console.log(cart);
    if (!cart.find((item) => item.id === product.id)) {
      setCart(cart.concat(product));
      product.inCart = true;
    } else {
      alert("Produto já está no carrinho");
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [slides]);

  return (
    <div className="relative w-full overflow-hidden md:w-7/12 lg:w-5/12">
      <div
        className=" flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 text-roxoMuitoJogo">
        <button
          onClick={handlePrev}
          className=" bg-white/90  p-1 shadow-xl hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={handleNext}
          className="hover:bgwhite  bg-white/90 p-1 shadow-xl hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex  items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDot(index)}
              className={`h-2 w-2 cursor-pointer rounded-full bg-white transition-all hover:bg-opacity-80 ${current === index ? "p-1.5" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-8 top-6  scale-75 md:scale-100 ">
        <h1 className="text-md flex items-center justify-center gap-3  bg-white  p-4 font-extrabold text-roxoMuitoJogo shadow-lg hover:bg-roxoMuitoJogo hover:text-white">
          {games[current].data.name}
        </h1>
      </div>
      <div className="absolute bottom-6 right-8  scale-75 md:scale-100 ">
        {!cart.find((item) => item.title === games[current].title) ? (
          <button
            onClick={() => handleCart(games[current])}
            className="text-md flex items-center justify-center gap-3  bg-white  p-4 font-extrabold text-roxoMuitoJogo shadow-lg hover:bg-roxoMuitoJogo hover:text-white"
          >
            <ShoppingCart />
            {games[current].price}
          </button>
        ) : (
          <button className="text-md flex cursor-default items-center justify-center gap-3  bg-gray-200 p-4  font-extrabold text-gray-400 opacity-95 shadow-lg ">
            <Check />
            {games[current].price}
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
