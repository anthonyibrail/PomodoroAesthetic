import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PomodoroPage from "./components/pomodoroPage";
import About from "./components/About";
import SignIn from "./components/SignIn";

/* 
TODO: primero vamos a hacer la versión de celular.
*/

function App() {
    return (
        <div className="App">
            
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/" element={<PomodoroPage />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </BrowserRouter>

            <div>
                <footer>
                    <p>
                        Hecho con <i className="bi bi-suit-heart"></i> por:
                    </p>
                    <nav>
                        <a href="https://github.com/AlnSuarez" target="_blank">
                            <i className="bi bi-github"></i> AlnSuarez
                        </a>{" "}
                        |
                        <a
                            href="https://github.com/MauroAlatristeA"
                            target="_blank"
                        >
                            <i className="bi bi-github"></i> MauroAlatristeA
                        </a>{" "}
                        |
                        <a
                            href="https://github.com/anthonyibrail"
                            target="_blank"
                        >
                            <i className="bi bi-github"></i> anthonyibrail
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
}

export default App;
