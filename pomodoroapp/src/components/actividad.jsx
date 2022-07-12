import React from "react";
import "./styles/actividades.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
function Actividad() {
    const data = [
        { name: "Lunes",actividad:20 },
        { name: "Martes",actividad:10 },
        { name: "Miercoles",actividad:8 },
        { name: "Jueves",actividad:20 },
        { name: "Viernes",actividad:15 },
        { name: "Sabado",actividad:12 },
        { name: "Domingo",actividad:18 },
    ];

    return (
        <div className="actividad">
            <h2>Actividad</h2>
            <LineChart
                width={300}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="actividad" stroke="#fff" />
                <CartesianGrid stroke="#ffff" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}

export default Actividad;
