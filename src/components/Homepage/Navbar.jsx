import Logo from "./Logo";
import List from "../Helpers/List";

const Navbar = () => {
  const navItems = [
    "Steam",
    "Nintendo",
    "Playstation",
    "Xbox",
    "Créditos para Jogos",
  ];

  const userItems = ["Conta", "Carrinho"];
  return (
    <>
      <nav>
        <Logo />
        <List items={navItems} />
        <List items={userItems} />
      </nav>
    </>
  );
};

export default Navbar;
