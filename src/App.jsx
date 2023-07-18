import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default App;
