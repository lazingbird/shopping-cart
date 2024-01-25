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
    color: "#1e3a8a",
  },
  {
    name: "Playstation",
    icon: faPlaystation,
    color: "#7f1d1d",
  },
  {
    name: "Xbox",
    icon: faXbox,
    color: "#14532d",
  },
  {
    name: "Créditos para Jogos",
    icon: faCoins,
    color: "#831843",
  },
  {
    name: "Todos Produtos",
    icon: faList,
    color: "#1d0b38",
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
