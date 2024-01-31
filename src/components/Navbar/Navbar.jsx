import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "./Logo";
import List from "../lists/List";

import navbarData from "../../data/navbarData";

import { Search } from "react-feather";

const Navbar = ({ focus }) => {
  const [search, setSearch] = useState(null);
  return (
    <>
      <header className="">
        <nav className="flex w-full flex-col items-center justify-between   text-slate-200">
          <div className="flex h-20 w-full items-center justify-between bg-roxoMuitoJogo  px-3 pb-3 pt-3 text-slate-200">
            <Logo></Logo>
            <form className="hidden lg:mr-20 lg:flex">
              <input
                name="search"
                autoComplete="off"
                onChange={(event) => setSearch(event.target.value)}
                role="presentation"
                className="w-50 rounded-none bg-white p-3 text-black placeholder:text-black/50 focus:outline-none lg:flex  lg:w-96"
                type="text"
                placeholder="Pesquise pelo seu jogo :)"
              />
              <Link
                className=""
                to={{ pathname: "/Catálogo", search: `?search=${search}` }}
              >
                <button className="h-full bg-slate-200 px-3 hover:opacity-90">
                  <Search className="text-roxoMuitoJogo"></Search>
                </button>
              </Link>
            </form>
            <div className="flex gap-3">
              <List items={navbarData.userItems} />
            </div>
          </div>
          <div className="flex items-center justify-center bg-white py-2 text-center">
            <List focus={focus} items={navbarData.productItems} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
