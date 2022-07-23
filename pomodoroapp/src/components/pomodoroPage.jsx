import React from "react";
import Actividad from "./actividad";
import Timer from "./Timer";
import "../styles/App.css"
import Todo from "./todo";
import Navbar from "./Navbar";


const PomodoroPage = () => {
    return (
        <div>
            <Navbar />
            <div className="tablero">
                <div className="columna1">
                    <div className="timerPomodoro">
                        <Timer />
                        {/* aqui va el componente timer */}
                    </div>
                    <div className="todo">
                        <Todo/>
                    </div>
                </div>
                <div className="columna2">
                    <Actividad />
                </div>
            </div>
        </div>
    );
};

export default PomodoroPage;
