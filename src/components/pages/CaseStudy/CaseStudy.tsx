import { FC, useEffect, useState } from "react";
import { Grid } from "../../../models/grids";
import { useFetchProducts } from "../../../repositories/products/ProductsRepositoryHooks";
import { createGridFromProducts } from "../../../utils/grid";
import { GridElement } from "../../organisms/GridElement";
import ZARA_LOGO from "../../../assets/png/logo.png";
import "./CaseStudy.css";

export type CaseStudyProps = {};

const ZARA_LOGO_ALT_TEXT = "Zara Logo";

export const CaseStudy: FC<CaseStudyProps> = () => {
  const { products, isLoading: isLoadingProducts } = useFetchProducts();

  const [grid, setGrid] = useState<Grid | undefined>(undefined);

  useEffect(() => {
    if (products.length) {
      const gridFromBackEnd = createGridFromProducts(products);
      setGrid(gridFromBackEnd);
    }
  }, [products]);

  if (isLoadingProducts) return null;

  return (
    <div className="container">
      <img className="logo" src={ZARA_LOGO} alt={ZARA_LOGO_ALT_TEXT} />
      {grid && (
        <GridElement grid={grid} products={products} onGridChange={setGrid} />
      )}
    </div>
  );
};
