import { FC, useEffect, useState } from "react";
import { Grid } from "../../../models/grids";
import { useFetchProducts } from "../../../repositories/products/ProductsRepositoryHooks";
import { createGridFromProducts } from "../../../utils/grid";
import { GridElement } from "../../organisms/GridElement";
import ZARA_LOGO from "../../../assets/png/logo.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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

  const transformComponentStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  if (isLoadingProducts) return null;

  return (
    <div className="container">
      <img className="logo" src={ZARA_LOGO} alt={ZARA_LOGO_ALT_TEXT} />
      <div>Parrilla de productos</div>
      {grid && (
        <TransformWrapper
          initialScale={1}
          minScale={0.3}
          maxScale={1}
          wheel={{
            step: 0.02,
            activationKeys: ["Meta", "Control"],
          }}
          panning={{ disabled: true }}
        >
          <TransformComponent
            wrapperStyle={transformComponentStyles}
            contentStyle={transformComponentStyles}
          >
            <GridElement
              grid={grid}
              products={products}
              onGridChange={setGrid}
            />
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>
  );
};
