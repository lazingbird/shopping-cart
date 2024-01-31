import {
  faSteam,
  faWindows,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCart, Check } from "react-feather";

const CatalogProducts = ({ data, cart, setCart }) => {
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
    <div className="catalog-grid-item shadow-lg">
      <div className="h-full">
        <img
          className=" h-9/12"
          src={data.data.background_image}
          alt={`Capa do jogo ${data.data.name}`}
        ></img>
        <div className="details h-3/12 flex h-24 items-center justify-between   bg-gray-950 p-4 text-white">
          <div className=" flex max-w-36 flex-col gap-3">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faSteam} />
              <FontAwesomeIcon icon={faWindows} />
            </div>
            <p className=" text-xs font-extrabold">{data.title}</p>
          </div>
          {!cart.find((item) => item.title === data.title) ? (
            <button
              onClick={() => handleCart(data)}
              className="flex items-center justify-center gap-3 bg-gray-700  p-3  text-sm font-bold text-white shadow-lg hover:bg-gray-600 hover:text-white"
            >
              <ShoppingCart size={20} />
              {data.price}
            </button>
          ) : (
            <button className="text-gray-400opacity-95 flex cursor-default items-center justify-center gap-3 bg-gray-200 p-3 text-sm font-bold shadow-lg">
              <Check size={20} />
              {data.price}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogProducts;
