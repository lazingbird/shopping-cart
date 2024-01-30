import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import fakeProducts from "../../data/fakeProducts";
import { ShoppingCart } from "react-feather";

const Playstation = () => {
  return (
    <>
      <Navbar focus={"Playstation"}></Navbar>
      <main className="bg-roxoMuitoJogo2 mt-10 flex flex-col items-center justify-center ">
        <section className="flex w-9/12 grid-cols-2 gap-20">
          <div>
            <h2 className=" text-4xl font-bold text-roxoMuitoJogo">
              CARTÃO PSN, GIFT CARD PS4 E MUITO MAIS
            </h2>
            <h3 className="mt-2 text-xl font-bold">
              Os melhores gift cards, cartões da psn e playstation plus para
              você aproveitar ao máximo seu serviço Playstation.
            </h3>
            <p className="mt-3 text-2xl font-bold text-roxoMuitoJogo">
              OFERTAS PERSONALIZADAS
            </p>
            <div className="mt-2 flex gap-5">
              {fakeProducts.playstationProducts.slice(0, 2).map((product) => (
                <div key={product.id}>
                  <img
                    className=" h-6/12"
                    src={product.img}
                    alt={`Capa do produto ${product.title}`}
                  ></img>
                  <div className="details h-3/12 flex h-24 items-center justify-between   bg-gray-950 p-4 text-white">
                    <p className=" text-xs font-extrabold">{product.title}</p>
                    <button className="flex items-center justify-center gap-3 bg-gray-700  p-3  text-sm font-bold text-white shadow-lg hover:bg-gray-600 hover:text-white">
                      <ShoppingCart size={15} />
                      {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className="hidden size-5/12 xl:block"
            src="https://www.muitojogo.com.br/wp-content/uploads/2020/10/PlaystationCard-768x768.png.webp"
          ></img>
        </section>
        <section className="flex w-9/12 flex-col ">
          <h2 className="mt-10 flex place-self-start text-3xl font-bold text-roxoMuitoJogo">
            Gift cards - Playstation
          </h2>
          <div className="playstation-grid mt-3 gap-5">
            {fakeProducts.playstationProducts.slice(2, 6).map((product) => (
              <div key={product.id}>
                <img
                  className=" h-6/12"
                  src={product.img}
                  alt={`Capa do produto ${product.title}`}
                ></img>
                <div className="details h-3/12 flex h-24 items-center justify-between   bg-gray-950 p-4 text-white">
                  <p className=" text-xs font-extrabold">{product.title}</p>
                  <button className="flex items-center justify-center gap-3 bg-gray-700  p-3  text-sm font-bold text-white shadow-lg hover:bg-gray-600 hover:text-white">
                    <ShoppingCart size={15} />
                    {product.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Playstation;
