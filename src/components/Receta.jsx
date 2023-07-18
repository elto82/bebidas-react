import React, { useContext } from "react";
import { ModalContex } from "../context/ModalContex";

const Receta = ({ receta }) => {
  const { setIdReceta } = useContext(ModalContex);

  return (
    <div className="col-md-4 mb-3 text-center mt-4  ">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={receta.strDrink}
        />
        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => setIdReceta(receta.idDrink)}
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
