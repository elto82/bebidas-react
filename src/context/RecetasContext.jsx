import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext();

export const RecetasProvider = ({ children }) => {
  const [consultar, setConsultar] = useState(false);
  const [recetas, setRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetasApi = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const respuesta = await axios(url);
        // console.log(respuesta.data.drinks);
        setRecetas(respuesta.data.drinks);
      };
      obtenerRecetasApi();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{
        buscarRecetas,
        setConsultar,
      }}
    >
      {children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
