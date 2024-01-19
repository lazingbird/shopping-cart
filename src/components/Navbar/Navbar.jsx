import Logo from "./Logo";
import List from "../lists/List";

import navbarData from "../../data/navbarData";

import { Search } from "react-feather";

const Navbar = ({ focus }) => {
  return (
    <>
      <header className="">
        <nav className="flex h-20 w-full items-center justify-between  px-3 pb-3 pt-3 text-slate-200">
          <Logo></Logo>
          <List focus={focus} items={navbarData.productItems} />
          <div className="flex gap-3">
            <div className="hidden xl:flex">
              <input
                name="search"
                className=" flex rounded-none bg-gray-200 p-3 text-black placeholder:text-black/50  focus:outline-none"
                type="text"
                placeholder="Pesquise pelo seu jogo :)"
              />
              <button className="bg-purple-900 px-3 hover:opacity-50">
                <Search></Search>
              </button>
            </div>
            <List items={navbarData.userItems} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
