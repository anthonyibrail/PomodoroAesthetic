import React, { useState } from "react";
import "./styles/todo.css";

function Todo() {
    const [Arreglo, setArreglo] = useState(["Tarea ejemplo inicial"]);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e);
    };
    const handleClick = () => {
        setArreglo([...Arreglo, text]);
    };

    return (
        <div className="wrapperTodo">
            <h1>To-Do List:</h1>
            <div className="addTask">
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea"
                    className="inputTodo"
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button className="buttonPlus" onClick={handleClick}>
                    +
                </button>
            </div>
            {Arreglo.map((tarea, index) => (
                <div className="tasks" key={index}>{tarea}</div>
            ))}
        </div>
    );
}

export default Todo;