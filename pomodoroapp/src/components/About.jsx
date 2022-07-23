import React from "react";
import Navbar from "./Navbar";
import "./styles/About.css";

const About = () => {
    return (
        <div className="">
            <Navbar />
            <div className="wrapper2">
                <div className="containerPerfil">
                    <img src="./img/pomodoro" alt="" />
                    <h2>¿Qué es la técnica pomodoro?</h2>
                    <p>
                        La técnica Pomodoro es un método para mejorar la
                        administración del tiempo dedicado a una actividad. Fue
                        creado por Francesco Cirillo a fines de la década de
                        1980.1​ Se basa en usar un temporizador para dividir el
                        tiempo en intervalos fijos, llamados pomodoros, de 25
                        minutos de actividad, seguidos de 5 minutos de descanso,
                        con pausas más largas cada cuatro pomodoros.
                    </p>

                    <h3>Mecánica Básica</h3>
                    
                        <ol>
                            <li>Decidir la tarea o actividad a realizar.</li>
                            <li>Poner el temporizador.</li>
                            <li>
                                Trabajar en la tarea de manera intensiva hasta
                                que el temporizador suene.
                            </li>
                            <li>
                                Hacer una marca para anotar qué pomodoro se ha
                                completado.
                            </li>
                            <li>Tomar una pausa breve.</li>
                            <li>
                                Cada cuatro pomodoros, tomar una pausa más
                                larga.
                            </li>
                        </ol>
                    
                    <p>
                        En el planeamiento, las tareas pueden venir de una lista
                        "para hacer hoy". También se puede intentar estimar el
                        esfuerzo que cada tarea podría requerir.{" "}
                    </p>

                    <p>
                        Durante el pomodoro, el foco es otorgado a una sola
                        actividad o tarea.{" "}
                    </p>

                    <p>
                        Un objetivo esencial de la técnica es eliminar las
                        interrupciones, tanto debido a uno mismo (internas),
                        como a alguien más (externas). Esto se hace anotándolas
                        rápidamente para atenderlas luego. Un pomodoro no se
                        puede pausar ni dividir; si no es posible postergar la
                        interrupción, el pomodoro se cancela para reiniciarlo
                        luego.{" "}
                    </p>

                    <p>
                        Las pausas son dedicadas a relajar el foco, evitando
                        cualquier actividad. Ayudan a hacer sostenible el
                        trabajo.
                    </p>
                    <p>
                        Registrar un pomodoro completado es tanto para tener un
                        sentimiento de logro como para tener una base de datos,
                        sobre la que más tarde se hace una reflexión para
                        mejorar.{" "}
                    </p>
                    <p>
                        La duración del pomodoro tradicional es de 25 minutos,
                        el de las pausas cortas de 5 minutos y el de las largas
                        de 20 minutos. Sin embargo, se pueden ajustar a los que
                        funcionen mejor para cada persona.{" "}
                    </p>

                    <a href="https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro">
                        Más información (fuente)
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
