import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import fakeProducts from "../../data/fakeProducts";
import { ShoppingCart, Check } from "react-feather";

const Xbox = ({ cart, setCart }) => {
  const handleCart = (product) => {
    console.log(cart);
    if (!cart.find((item) => item.id === product.id)) {
      setCart(cart.concat(product));
      product.inCart = true;
    } else {
      alert("Produto já está no carrinho");
    }
  };

  return (
    <>
      <Navbar focus={"Xbox"}></Navbar>
      <main className="bg-roxoMuitoJogo2 mt-10 flex flex-col items-center justify-center ">
        <section className="flex w-9/12 grid-cols-2 gap-20">
          <div>
            <h2 className=" text-4xl font-bold text-roxoMuitoJogo">
              GIFT CARD XBOX, JOGOS E MUITO MAIS
            </h2>
            <h3 className="mt-2 text-xl font-bold">
              Os melhores gift cards, cartões do Xbox para você aproveitar ao
              máximo promoções e ofertas da plataforma.
            </h3>
            <p className="mt-3 text-2xl font-bold text-roxoMuitoJogo">
              XBOX GAME PASS
            </p>
            <div className="mt-2 flex gap-5">
              {fakeProducts.xboxProducts.slice(0, 2).map((product) => (
                <div key={product.id}>
                  <img
                    className=" h-6/12"
                    src={product.img}
                    alt={`Capa do produto ${product.title}`}
                  ></img>
                  <div className="details h-3/12 flex flex-col items-center justify-between gap-3  bg-gray-950 p-4 text-white">
                    <p className=" text-xs font-extrabold">{product.title}</p>
                    {!cart.find((item) => item.title === product.title) ? (
                      <button
                        onClick={() => handleCart(product)}
                        className="flex items-center justify-center gap-3 bg-gray-700  p-3  text-sm font-bold text-white shadow-lg hover:bg-gray-600 hover:text-white"
                      >
                        <ShoppingCart size={20} />
                        {product.price}
                      </button>
                    ) : (
                      <button className="flex cursor-default items-center justify-center gap-3 bg-gray-200 p-3 text-sm font-bold text-gray-400 opacity-95 shadow-lg">
                        <Check size={20} />
                        {product.price}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className="hidden size-5/12 xl:block"
            src="https://www.muitojogo.com.br/wp-content/uploads/2021/04/XboxLive.jpg.webp"
          ></img>
        </section>
        <section className="flex w-9/12 flex-col ">
          <h2 className="mt-10 flex place-self-start text-3xl font-bold text-roxoMuitoJogo">
            Gift cards - Xbox
          </h2>
          <div className="xbox-grid mt-3 gap-5">
            {fakeProducts.xboxProducts.slice(2, -1).map((product) => (
              <div key={product.id}>
                <img
                  className=" h-6/12"
                  src={product.img}
                  alt={`Capa do produto ${product.title}`}
                ></img>
                <div className="details h-3/12 flex flex-col items-center justify-between gap-3  bg-gray-950 p-4 text-white">
                  <p className=" text-xs font-extrabold">{product.title}</p>
                  {!cart.find((item) => item.title === product.title) ? (
                    <button
                      onClick={() => handleCart(product)}
                      className="flex items-center justify-center gap-3 bg-gray-700  p-3  text-sm font-bold text-white shadow-lg hover:bg-gray-600 hover:text-white"
                    >
                      <ShoppingCart size={20} />
                      {product.price}
                    </button>
                  ) : (
                    <button className="flex cursor-default items-center justify-center gap-3 bg-gray-200 p-3 text-sm font-bold text-gray-400 opacity-95 shadow-lg">
                      <Check size={20} />
                      {product.price}
                    </button>
                  )}
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

export default Xbox;
