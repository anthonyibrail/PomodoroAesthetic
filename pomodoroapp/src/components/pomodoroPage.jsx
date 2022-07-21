import React from "react";
import Actividad from "./actividad";
import Timer from "./Timer";

const PomodoroPage = () => {
    return (
        <div>
            <div className="tablero">
                <div className="columna1">
                    <div className="timerPomodoro">
                        <Timer />
                        {/* aqui va el componente timer */}
                    </div>
                    <Actividad />
                </div>
                <div className="columna2">
                    <div className="todo">
                        {/* aqui va el componente todo */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PomodoroPage;
