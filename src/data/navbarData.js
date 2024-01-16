import {
  faSteam,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCoins,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const productItems = [
  {
    name: "Steam",
    icon: faSteam,
  },
  {
    name: "Playstation",
    icon: faPlaystation,
  },
  {
    name: "Xbox",
    icon: faXbox,
  },
  {
    name: "Creditos para Jogos",
    icon: faCoins,
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
