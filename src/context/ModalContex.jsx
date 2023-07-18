import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContex = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, setIdReceta] = useState(null);

  return (
    <ModalContex.Provider
      value={{
        setIdReceta,
      }}
    >
      {children}
    </ModalContex.Provider>
  );
};

export default ModalProvider;
