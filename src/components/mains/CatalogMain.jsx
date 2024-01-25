import games from "../../services/games";
import { v4 as uuidv4 } from "uuid";

import fakeProducts from "../../data/fakeProducts";
import { useState, useEffect } from "react";

import CatalogProducts from "./CatalogProducts";

const ShowPage = ({ page, products }) => {
  let productList = products.slice(page * 12, page * 12 + 12);
  return (
    <>
      {productList.map((product) => (
        <CatalogProducts key={uuidv4()} data={product}></CatalogProducts>
      ))}
    </>
  );
};

const CatalogMain = () => {
  const [products, setProducts] = useState(null);
  const [pages, setPages] = useState([1]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      let nextPage = 2;
      let tempPages = [1];
      const result = await Promise.all(
        fakeProducts.allFakeProducts.map(async (item, index) => {
          console.log((index + 1) % 12);
          if ((index + 1) % 12 === 0) {
            tempPages.push(nextPage);
            nextPage = nextPage + 1;
          }
          let request = await games.getById(item.rawg_id);
          return {
            ...item,
            data: request,
          };
        }),
      );
      setProducts(result);
      setTotalProducts(result.length);
      setPages(tempPages);
    };
    fetchData();
  }, []);

  if (products === null) {
    return;
  }
  return (
    <section className="mt-10 flex flex-col items-center">
      <h2 className="mb-6 text-3xl font-bold text-roxoMuitoJogo">
        Todos Produtos
      </h2>
      <div className="catalog-grid grid w-8/12 ">
        <ShowPage page={currentPage} products={products}></ShowPage>
        {/* {products.slice(0, itemPerPage).map((product) => (
          <CatalogProducts key={uuidv4()} data={product} />
        ))} */}
      </div>
      <div className="mt-5 flex gap-5">
        {pages.map((pageNumber) => (
          <button
            style={{
              fontWeight: pageNumber - 1 === currentPage ? "bold" : "thin",
            }}
            onClick={() => setCurrentPage(pageNumber - 1)}
            key={uuidv4()}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CatalogMain;
