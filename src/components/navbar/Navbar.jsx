import Logo from "./Logo";
import List from "../helpers/List";

import navbarData from "../../data/navbarData";

const Navbar = ({ focus }) => {
  return (
    <>
      <header className=" h-screen">
        <nav className="display: flex h-20 items-center justify-between border-b-2 px-3 pb-2 pt-3 text-slate-200">
          <Logo></Logo>
          <List focus={focus} items={navbarData.productItems} />
          <List items={navbarData.userItems} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
