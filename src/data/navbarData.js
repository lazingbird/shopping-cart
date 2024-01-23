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
    color: "#581c87",
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
    name: "Todos produtos",
    icon: faList,
    color: "#155e75",
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
