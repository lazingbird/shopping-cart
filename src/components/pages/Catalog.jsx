import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CatalogMain from "../mains/CatalogMain";

const Catalog = () => {
  return (
    <>
      <header>
        <Navbar focus={"Todos Produtos"}></Navbar>
      </header>
      <main>
        <CatalogMain />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Catalog;
