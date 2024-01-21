import {
  faSteam,
  faWindows,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCart } from "react-feather";

const CarouselImage = ({ data, index, onlyImage }) => {
  if (onlyImage === true) {
    return <img key={data.data.id} src={data.data.background_image}></img>;
  }
  return (
    <div key={index + 10} className="shadow-lg">
      <img
        src={data.data.background_image}
        alt={`Capa do jogo ${data.data.name}`}
      ></img>
      <div className="flex h-24 items-center justify-between   bg-gray-950 p-3 text-white">
        <div className=" flex max-w-36 flex-col gap-3">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faSteam} />
            <FontAwesomeIcon icon={faWindows} />
          </div>
          <p className=" text-xs font-extrabold">{data.data.name}</p>
        </div>
        <button className="flex items-center justify-center gap-3 bg-gray-700  p-3  text-sm font-bold text-white shadow-lg hover:bg-gray-600 hover:text-white">
          <ShoppingCart size={20} />
          {data.price}
        </button>
      </div>
    </div>
  );
};

export default CarouselImage;
