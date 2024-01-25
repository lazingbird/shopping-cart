import Navbar from "../Navbar/Navbar";
import SteamMain from "../mains/SteamMain";
import Footer from "../Footer/Footer";

const Steam = () => {
  return (
    <>
      <header>
        <Navbar focus={"Steam"}></Navbar>
      </header>
      <main>
        <SteamMain />
      </main>
      <Footer />
    </>
  );
};

export default Steam;
