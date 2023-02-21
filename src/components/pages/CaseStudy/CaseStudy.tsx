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
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";

import "./CaseStudy.css";

export type CaseStudyProps = {};

const MODAL_STYLES: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "66%",
    maxHeight: "80%",
    transform: "translate(-50%, -50%)",
  },
};

export const CaseStudy: FC<CaseStudyProps> = () => {
  // We are using a general fetch, but we could also use one declaring exactly the different products IDs
  const { products, isLoading: isLoadingProducts } = useFetchProducts();
  const { createGrid } = useCreateGrid();

  const [grid, setGrid] = useState<Grid | undefined>(undefined);
  const [saveGridButtonIsEnabled, setSaveGridButtonIsEnabled] = useState(false);
  const [informationModalIsOpen, setInformationModalIsOpen] = useState(false);

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
    setInformationModalIsOpen(true);
  }

  function handleCloseModal() {
    setInformationModalIsOpen(false);
  }

  function handleSaveGrid() {
    if (grid) {
      createGrid({ gridToCreate: grid })
        .then(() => toast.success(traductions.toast_success_saving_grid))
        .catch(() => toast.error(traductions.toast_error_saving_grid));
    }
  }

  const transformComponentStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  if (isLoadingProducts) return null;

  return (
    <div className="container">
      <ToastContainer />
      <Modal
        isOpen={informationModalIsOpen}
        onRequestClose={handleCloseModal}
        style={MODAL_STYLES}
      >
        <div className="modal-content" onClick={handleCloseModal}>
          <div className="title">{traductions.modal.title_1}</div>
          <div>
            {traductions.modal.paragraph_1}
            <br />
            <br />
            {traductions.modal.paragraph_2}
            <br />
            <br />
            {traductions.modal.paragraph_3}
          </div>
          <div className="title">{traductions.modal.title_2}</div>
          <div>{traductions.modal.paragraph_4}</div>
          <div className="title">{traductions.modal.title_3}</div>
          <div>{traductions.modal.paragraph_5}</div>
          <div style={{ fontWeight: "bold" }}>
            {traductions.modal.paragraph_6}
          </div>
        </div>
      </Modal>
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
