import {
  faSteam,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCoins,
  faUser,
  faCartShopping,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const productItems = [
  {
    name: "Home",
    icon: faHouse,
    color: "text-purple-900",
  },
  {
    name: "Steam",
    icon: faSteam,
    color: "text-blue-900",
  },
  {
    name: "Playstation",
    icon: faPlaystation,
    color: "text-red-900",
  },
  {
    name: "Xbox",
    icon: faXbox,
    color: "text-green-900",
  },
  {
    name: "Créditos para Jogos",
    icon: faCoins,
    color: "text-pink-900",
  },
];

const userItems = [
  {
    name: "Conta",
    icon: faUser,
  },
  { name: "Carrinho", icon: faCartShopping },
];

export default { productItems, userItems };
