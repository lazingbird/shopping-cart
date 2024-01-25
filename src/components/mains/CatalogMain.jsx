import games from "../../services/games";
import { v4 as uuidv4 } from "uuid";

import fakeProducts from "../../data/fakeProducts";
import { useState, useEffect } from "react";

import CatalogProducts from "./CatalogProducts";

const CatalogMain = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        fakeProducts.allFakeProducts.map(async (item) => {
          let request = await games.getById(item.rawg_id);
          return {
            ...item,
            data: request,
          };
        }),
      );
      setProducts(result);
    };
    fetchData();
  }, []);

  if (products === null) {
    return;
  }
  return (
    <section className="mt-10 flex flex-col items-center">
      <h2 className="text-roxoMuitoJogo mb-6 text-3xl font-bold">
        Todos Produtos
      </h2>
      <div className="catalog-grid grid w-8/12">
        {products.map((product) => (
          <CatalogProducts key={uuidv4()} data={product} />
        ))}
      </div>
    </section>
  );
};

export default CatalogMain;
