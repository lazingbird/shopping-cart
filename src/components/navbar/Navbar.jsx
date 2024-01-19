import Logo from "./Logo";
import List from "../reusable/List";

import navbarData from "../../data/navbarData";

const Navbar = ({ focus }) => {
  return (
    <>
      <header className="">
        <nav className="display: flex h-20 items-center justify-between  px-3 pb-3 pt-3 text-slate-200">
          <Logo></Logo>
          <List focus={focus} items={navbarData.productItems} />
          <List items={navbarData.userItems} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
