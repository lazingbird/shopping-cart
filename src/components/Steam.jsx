import Logo from "./Logo";
import List from "./helpers/List";

import navbarData from "../data/navbarData";

const Steam = () => {
  const defaultColor = navbarData.productItems[1].color;
  console.log(defaultColor);
  return (
    <>
      <header className=" h-screen" style={{ backgroundColor: defaultColor }}>
        <nav className="display: flex h-20 items-center justify-between px-3 pt-10 text-slate-200">
          <Logo></Logo>
          <List focus="Steam" items={navbarData.productItems} />
          <List items={navbarData.userItems} />
        </nav>
      </header>
    </>
  );
};

export default Steam;
