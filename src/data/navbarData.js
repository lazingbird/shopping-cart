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
  faList,
} from "@fortawesome/free-solid-svg-icons";

const productItems = [
  {
    name: "Home",
    icon: faHouse,
    color: "#4B1248",
  },

  {
    name: "Steam",
    icon: faSteam,
    color: "#4B1248",
  },
  {
    name: "Playstation",
    icon: faPlaystation,
    color: "#4B1248",
  },
  {
    name: "Xbox",
    icon: faXbox,
    color: "#4B1248",
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
