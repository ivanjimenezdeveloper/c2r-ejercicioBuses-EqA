import { useState, useEffect, useRef } from "react";

export const DisplayParadas = (props) => {
  const { paradas } = props;
  const [posicion, setPosicion] = useState("0");

  return (
    <header className="cabecera">
      <h1>Parada nº{paradas.routeId}</h1>
      <div className="display">
        <div className="carousel">
          {paradas.map((paradas) => (
            <div className="bus">
              <span className="linea">{paradas.line}</span>
              <span className="destino">{paradas.destination}</span>
              <span className="tiempo">{paradas["t-in-min"]}min</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
