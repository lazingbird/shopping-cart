import Logo from "./Logo";
import List from "../helpers/List";

import navbarData from "../../data/navbarData";

const Navbar = () => {
  return (
    <>
      <header className="">
        <nav className="display: flex h-20 items-center justify-between bg-purple-950 px-4 text-slate-200">
          <Logo></Logo>
          <List items={navbarData.productItems} />
          <List items={navbarData.userItems} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
