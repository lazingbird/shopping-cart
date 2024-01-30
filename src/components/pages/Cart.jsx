import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className=" mb-40 mt-20 flex flex-col items-center justify-center self-center ">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-3xl font-bold">Carrinho</h2>
          <div className="mt-28 flex justify-between gap-3">
            <button className="border bg-roxoMuitoJogo p-2 font-bold text-white">
              Comprar
            </button>
            <button className=" border bg-roxoMuitoJogo p-2 font-bold text-white">
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
