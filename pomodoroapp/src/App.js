import "./styles/App.css";

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
                    <div className="timerPomodoro">{/* aqui va el componente timer */}</div>
                    <div className="actividad">{/* aqui va el componente actividad */}</div>
                </div>
                <div className="columna2">
                    <div className="todo">{/* aqui va el componente todo */}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
