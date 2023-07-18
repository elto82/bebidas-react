import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategoriasApi = async () => {
      try {
        const url =
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const res = await axios(url);

        setCategorias(res.data.drinks);
      } catch (error) {
        console.log("error:", error);
      }
    };
    obtenerCategoriasApi();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
