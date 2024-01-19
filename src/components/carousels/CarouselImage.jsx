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
    return <img key={index + 50} src={data.image}></img>;
  }
  return (
    <div key={index + 10} className="shadow-lg">
      <img src={data.image} alt={`Capa do jogo ${data.title}`}></img>
      <div className="h-18 flex items-end justify-between   bg-gray-950 p-3 text-white">
        <div className=" flex flex-col gap-3">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faSteam} />
            <FontAwesomeIcon icon={faWindows} />
          </div>
          <p className="text-xs">{data.title}</p>
        </div>
        <button className="text-md flex items-center justify-center gap-3  bg-gray-700  p-3 font-extrabold text-white shadow-lg hover:bg-gray-600 hover:text-white">
          <ShoppingCart size={20} />
          R$ 199,90
        </button>
      </div>
    </div>
  );
};

export default CarouselImage;
