import "./styles/App.css";
import Actividad from "./components/actividad";
import Timer from "./components/Timer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

/* 
TODO: primero vamos a hacer la versión de celular.

*/

function App() {
    return (
        <div className="App">
            {/* aqui abajo va el nav y la hamburguesa */}
            <div className="Nav">
                <div className="hamburguesa">
                    {/* Aqui va el componente hamburguesa */}
                </div>
                <nav className="navbar">{/* Este es el componente nav */}</nav>
            </div>

            <div className="tablero">
                <div className="columna1">
                    <div className="timerPomodoro">{/* aqui va el componente timer */}
                   <Timer/>
                    </div>
                    <Actividad/>
                </div>
                <div className="columna2">
                    <div className="todo">{/* aqui va el componente todo */}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
