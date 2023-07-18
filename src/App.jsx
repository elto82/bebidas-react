import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaRecetas from "./components/ListaRecetas";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
        <ListaRecetas />
      </div>
    </div>
  );
};

export default App;
