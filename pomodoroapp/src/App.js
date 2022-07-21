import "./styles/App.css";
import Actividad from "./components/actividad";
import Timer from "./components/Timer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";

/* 
TODO: primero vamos a hacer la versión de celular.
*/

function App() {
  return (
    <div className="App">
      {/* aqui abajo va el nav y la hamburguesa */}
      <Navbar />

      <div className="tablero">
        <div className="columna1">
          <div className="timerPomodoro">
            {/* aqui va el componente timer */}
            <Timer />
          </div>
          <Actividad />
        </div>
        <div className="columna2">
          <div className="todo">{/* aqui va el componente todo */}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
