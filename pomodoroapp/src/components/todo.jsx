import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import "./styles/todo.css";

function Todo() {
    const [Arreglo, setArreglo] = useState([
        {
            textObj: "tarea ejemplo",
            index: 0,
            isDone: false,
            toggleEdit: false,
        },
    ]);

    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const handleChange = (e) => {
        setText(e);
    };

    const handleClick = () => {
        if (text.length !== 0) {
            let temp = uuidv4();
            setArreglo([
                ...Arreglo,
                { textObj: text, id: temp, isDone: false, toggleEdit: false },
            ]);
        } else {
            toast("No has llenado el apartado de texto.");
        }
    };

    const handleSelected = (e) => {
        console.log(`su id es: ${e}`);
    };

    const borrar = (tareaid) => {
        setArreglo(Arreglo.filter((tareatemp) => tareatemp.id !== tareaid));
    };

    const checked = (tareaid) => {
        let temp = Arreglo.map((elemento) => {
            if (tareaid === elemento.id) {
                return { ...elemento, isDone: !elemento.isDone };
            }
            return elemento;
        });
        setArreglo(temp);
    };

    const editTask = (tareaid) => {
        let temp = Arreglo.map((elemento) => {
            if (tareaid === elemento.id) {
                if (elemento.toggleEdit == true) {
                    setText2("");
                }
                return { ...elemento, toggleEdit: !elemento.toggleEdit };
            }
            return elemento;
        });
        setArreglo(temp);
    };

    const editText = (e) => {
        console.log(e);
        setText2(e);
    };

    const replaceTask = (tareaid) => {
        if (text2.length !== 0) {
            let temp = Arreglo.map((elemento) => {
                if (tareaid === elemento.id) {
                    return {
                        ...elemento,
                        textObj: text2,
                        toggleEdit: !elemento.toggleEdit,
                    };
                }
                return elemento;
            });
            setArreglo(temp);
        } else {
            toast("No has llenado el apartado de texto.");
        }
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
                <button className="buttonPlus" onClick={() => handleClick()}>
                    <i class="bi bi-plus-circle-fill"></i>
                </button>
            </div>
            <div className="tasksWrapper">
                {Arreglo.map((tarea, index) => (
                    <div className="tasks" key={index}>
                        <div className="taskgroup">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                key={index}
                                onClick={() => checked(tarea.id)}
                            />
                            {tarea.toggleEdit === false ? (
                                <p className="tareaTexto">{tarea.textObj}</p>
                            ) : (
                                <input
                                    placeholder={tarea.textObj}
                                    className="inputTemp"
                                    onChange={(e) => {
                                        editText(e.target.value);
                                    }}
                                />
                            )}
                        </div>
                        <div className="trash">
                            {tarea.toggleEdit === false ? (
                                <button onClick={() => editTask(tarea.id)}>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            ) : (
                                <div>
                                    <button
                                        onClick={() => replaceTask(tarea.id)}
                                    >
                                        <i className="bi bi-check-circle text-warning"></i>
                                    </button>
                                    <button onClick={() => editTask(tarea.id)}>
                                        <i class="bi bi-x-circle text-danger"></i>
                                    </button>
                                </div>
                            )}
                            <button
                                onClick={() => {
                                    borrar(tarea.id);
                                }}
                            >
                                <i className="bi bi-trash-fill text-danger"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Toaster />
        </div>
    );
}

export default Todo;
