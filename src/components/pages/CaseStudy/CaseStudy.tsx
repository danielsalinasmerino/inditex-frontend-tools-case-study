import { FC, useEffect, useState } from "react";
import { Grid } from "../../../models/grids";
import { useFetchProducts } from "../../../repositories/products/ProductsRepositoryHooks";
import { createGridFromProducts, gridIsReadyToSave } from "../../../utils/grid";
import { GridElement } from "../../organisms/GridElement";
import ZARA_LOGO from "../../../assets/png/logo.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "../../atoms/Button";
import { traductions } from "../../../i18n/traductions";
import { useCreateGrid } from "../../../repositories/grids/GridsRepositoryHooks";

import "./CaseStudy.css";

export type CaseStudyProps = {};

export const CaseStudy: FC<CaseStudyProps> = () => {
  const { products, isLoading: isLoadingProducts } = useFetchProducts();
  const { createGrid } = useCreateGrid();

  const [grid, setGrid] = useState<Grid | undefined>(undefined);
  const [saveGridButtonIsEnabled, setSaveGridButtonIsEnabled] = useState(false);

  useEffect(() => {
    if (products.length) {
      const gridFromBackEnd = createGridFromProducts(products);
      setGrid(gridFromBackEnd);
    }
  }, [products]);

  useEffect(() => {
    setSaveGridButtonIsEnabled(gridIsReadyToSave(grid));
  }, [grid]);

  function handleShowInfo() {
    console.log("Show info");
  }

  function handleSaveGrid() {
    if (grid) {
      createGrid({ gridToCreate: grid })
        .then(() => console.log("Grid created correctly"))
        .catch(() => console.log("Error creating the grid"));
    }
  }

  const transformComponentStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  if (isLoadingProducts) return null;

  return (
    <div className="container">
      <img
        className="logo"
        src={ZARA_LOGO}
        alt={traductions.alt_logo_image_text}
      />
      <div className="main-header">
        <div className="grid-title">{traductions.products_grid}</div>
        <div>
          <Button
            onClick={handleShowInfo}
            label={traductions.info}
            style={{ marginRight: 24 }}
          />
          <Button
            onClick={handleSaveGrid}
            label={traductions.save_products_grid}
            disabled={!saveGridButtonIsEnabled}
          />
        </div>
      </div>
      {grid && (
        <TransformWrapper
          initialScale={1}
          minScale={0.3}
          maxScale={1}
          wheel={{
            step: 0.02,
            activationKeys: ["Meta", "Control"],
          }}
          panning={{ disabled: true, excluded: ["select", "button"] }}
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
