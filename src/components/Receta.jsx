import { useContext, useState } from "react";
import { ModalContex } from "../context/ModalContex";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { informacion, setIdReceta } = useContext(ModalContex);
  //console.log(informacion);

  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={`ingrediente-${i}`}>
            {informacion[`strMeasure${i}`]}
            {informacion[`strIngredient${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

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
            onClick={() => {
              setIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              //setReceta(null);
              setIdReceta(null);
              handleClose();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {informacion.strDrink}
                <br />
                información:
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {informacion.strInstructions}
                <img
                  className="img-fluid my-4"
                  src={informacion.strDrinkThumb}
                  alt={informacion.strDrink}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                    objectFit: "cover",
                    objectPosition: "center",
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    height: "50%",
                    display: "block",
                  }}
                />
              </Typography>
              <div>Ingredientes y Cantidades</div>
              <ul>{mostrarIngredientes(informacion)}</ul>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
