import { useCallback, useEffect, useState } from "react";
import { TiempoLinea } from "./TiempoLinea";

import { DisplayParadas } from "./DisplayParadas";

import PropTypes from "prop-types";


export const Cabecera = (props) => {
  const { paradas, paradaSeleccionada } = props;
  const [tiempoEspera, setTiempoEspera] = useState("sin tiempo seleccionado");
  const getTiempoEspera = useCallback((paradas, paradaSeleccionada) => {
    const tiempoEsperaDummy = paradas.find((parada) =>
      parada.line === paradaSeleccionada ? parada : ""
    );

    return tiempoEsperaDummy["text-ca"];
  }, []);

  useEffect(
    () => setTiempoEspera(getTiempoEspera(paradas, paradaSeleccionada)),
    [getTiempoEspera, paradas, paradaSeleccionada]
  );

  return (
   <>
      <DisplayParadas paradas={paradas}/>
      <TiempoLinea />

    <header className="cabecera">
      <h1>Parada nº 15</h1>
      <div className="display">
        <div className="bus">
          <span className="linea">V16</span>
          <span className="destino">Universitat</span>
          <span className="tiempo">10min</span>
        </div>
        <div className="bus">
          <span className="linea">H12</span>
          <span className="destino">Pla de Palau</span>
          <span className="tiempo">1min</span>
        </div>
        <div className="bus">
          <span className="linea">32</span>
          <span className="destino">Barceloneta</span>
          <span className="tiempo">4min</span>
        </div>
      </div>
      <TiempoLinea
        paradaSeleccionada={paradaSeleccionada}
        tiempoEspera={tiempoEspera}
      />
    </header>
    </>

  );
};

Cabecera.propTypes = {
  paradas: PropTypes.arrayOf(
    PropTypes.shape({
      routeId: PropTypes.string.isRequired,
      line: PropTypes.string.isRequired,
      "text-ca": PropTypes.string.isRequired,
      "t-in-s": PropTypes.number.isRequired,
      destination: PropTypes.string.isRequired,
      "t-in-min": PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  paradaSeleccionada: PropTypes.string.isRequired,
};
