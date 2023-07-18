import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContex = createContext();

const ModalProvider = ({ children }) => {
  const [informacion, setReceta] = useState({});

  const [idReceta, setIdReceta] = useState(null);

  useEffect(() => {
    const obtenerRecetaApi = async () => {
      if (!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const res = await axios(url);
      setReceta(res.data.drinks[0]);
    };
    obtenerRecetaApi();
  }, [idReceta]);

  return (
    <ModalContex.Provider
      value={{
        informacion,
        setIdReceta,
        //setReceta,
      }}
    >
      {children}
    </ModalContex.Provider>
  );
};

export default ModalProvider;
