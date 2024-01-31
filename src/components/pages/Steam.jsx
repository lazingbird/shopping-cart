import Navbar from "../Navbar/Navbar";
import SteamMain from "../mains/SteamMain";

const Steam = ({ cart, setCart }) => {
  return (
    <>
      <Navbar focus={"Steam"}></Navbar>
      <SteamMain cart={cart} setCart={setCart} />
    </>
  );
};

export default Steam;
