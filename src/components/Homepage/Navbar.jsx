import Logo from "./Logo";
import List from "../helpers/List";

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

const Navbar = () => {
  const navItems = [
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
      name: "Creditos de jogos",
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

  return (
    <>
      <header className="">
        <nav className="display: flex h-20 items-center justify-between bg-purple-950 px-4 text-slate-200">
          <Logo></Logo>
          <List items={navItems} />
          <List items={userItems} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
