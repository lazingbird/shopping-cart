import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ShopContext } from "../../ShopContext";
import { createContext, useContext, useEffect, useState } from "react";

const Cart = ({ cart, setCart }) => {
  let total;

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Navbar></Navbar>
      <main className=" mb-40 mt-20 flex flex-col items-center justify-center self-center ">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-3xl font-bold">Carrinho</h2>
          <div className="flex flex-col gap-5">
            {cart.map((product, index) => (
              <div key={product.id} className="flex w-full items-center  ">
                {product.img ? (
                  <img src={product.img} className="max-h-36" />
                ) : (
                  <img
                    src={product.data.background_image}
                    className="max-h-36"
                  />
                )}

                <div className="flex h-36 w-full items-center justify-center gap-10 border bg-gray-100 px-8  ">
                  <div className="w-3/5">
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p>{product.price}</p>
                  </div>
                  <button
                    onClick={() =>
                      setCart(cart.filter((item) => item.id != product.id))
                    }
                    className="w-2/5 bg-roxoMuitoJogo p-2 text-white hover:bg-opacity-80"
                  >
                    Remover do carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cart.length >= 1 && (
            <p className="mt-5 text-2xl font-bold">
              Total: R$
              {cart
                .reduce(
                  (total, current) =>
                    total + parseFloat(current.price.replace("R$ ", "")),
                  0,
                )
                .toFixed(2)}
            </p>
          )}
          <div className="mt-10 flex justify-between gap-3">
            <button className="border bg-roxoMuitoJogo p-2 font-bold text-white">
              Comprar
            </button>
            <button
              onClick={() => setCart([])}
              className=" border bg-roxoMuitoJogo p-2 font-bold text-white"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
