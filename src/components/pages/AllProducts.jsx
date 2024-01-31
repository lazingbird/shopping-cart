import games from "../../services/games";
import { v4 as uuidv4 } from "uuid";

import fakeProducts from "../../data/fakeProducts";
import { useState, useEffect } from "react";

import CatalogProducts from "../mains/CatalogProducts";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useLocation, useSearchParams } from "react-router-dom";

const AllProducts = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [filter, setFilter] = useState(null);
  const [products, setProducts] = useState(null);
  const [pages, setPages] = useState([1]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemPerPage = 12;

  const calcPages = (products) => {
    let nextPage = 2;
    let tempPages = [1];
    products.map((prod, index) => {
      if ((index + 1) % itemPerPage === 0) {
        tempPages.push(nextPage);
        nextPage = nextPage + 1;
      }
    });

    return tempPages;
  };

  useEffect(() => {
    setFilter(searchParams.get("search"));
    let products = fakeProducts.allSteamFakeProducts;

    if (filter) {
      products = products.filter((product) => {
        return product.title.toLowerCase().match(filter.toLowerCase());
      });
    }
    const fetchData = async () => {
      let result = await Promise.all(
        products
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .slice(
            currentPage * itemPerPage,
            currentPage * itemPerPage + itemPerPage,
          )
          .map(async (item, index) => {
            let request = await games.getById(item.rawg_id);
            return {
              ...item,
              data: request,
            };
          }),
      );
      setProducts(result);
      setTotalProducts(result.length);
      setPages(calcPages(products));
    };
    fetchData();
  }, [currentPage, filter, searchParams]);

  const handleUpdatePage = async (page) => {
    setCurrentPage(page);
  };

  if (products === null) {
    return;
  }
  return (
    <>
      <Navbar focus={"Catálogo"} />
      <main>
        <section className="mt-10 flex flex-col items-center">
          <h2 className="mb-6 text-3xl font-bold text-roxoMuitoJogo">
            Os melhores jogos na Steam com os melhores preços
          </h2>
          <div className="catalog-grid grid w-8/12 ">
            {products.map((product) => (
              <CatalogProducts key={uuidv4()} data={product}></CatalogProducts>
            ))}
          </div>
          <div className="mt-5 flex gap-5">
            {pages.map((pageNumber) => (
              <button
                style={{
                  fontWeight: pageNumber - 1 === currentPage ? "bold" : "thin",
                }}
                onClick={() => handleUpdatePage(pageNumber - 1)}
                key={uuidv4()}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AllProducts;
