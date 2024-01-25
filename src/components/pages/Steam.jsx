import Navbar from "../Navbar/Navbar";
import SteamMain from "../mains/SteamMain";

const Steam = () => {
  return (
    <>
      <header>
        <Navbar focus={"Steam"}></Navbar>
      </header>
      <SteamMain />
    </>
  );
};

export default Steam;
