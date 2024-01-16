import Logo from "./Logo";
import List from "./helpers/List";

import navbarData from "../data/navbarData";

const Navbar = () => {
  return (
    <>
      <header className=" h-screen bg-purple-900">
        <nav className="display: flex h-20 items-center justify-between px-3 pt-10 text-slate-200">
          <Logo></Logo>
          <List items={navbarData.productItems} />
          <List items={navbarData.userItems} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
