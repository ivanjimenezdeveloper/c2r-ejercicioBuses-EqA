import { useCallback, useEffect, useState } from "react";
import { TiempoLinea } from "./TiempoLinea";

import { DisplayParadas } from "./DisplayParadas";

import PropTypes from "prop-types";

export const Cabecera = (props) => {
  const { paradas, paradaSeleccionada } = props;
  const [tiempoEspera, setTiempoEspera] = useState("sin tiempo seleccionado");
  const getTiempoEspera = useCallback((paradas, paradaSeleccionada) => {
    if (paradas !== undefined && paradas.length > 0) {
      const tiempoEsperaDummy = paradas.find((parada) =>
        parada.line === paradaSeleccionada ? parada : ""
      );

      return tiempoEsperaDummy !== undefined
        ? tiempoEsperaDummy["text-ca"]
        : "No hay parada seleccionada";
    }
    return "No hay parada seleccionada";
  }, []);

  useEffect(() => {
    paradas[0].routeId !== "" &&
      setTiempoEspera(getTiempoEspera(paradas, paradaSeleccionada));
  }, [getTiempoEspera, paradas, paradaSeleccionada]);

  return (

    <header className="cabecera">
      {paradas[0].routeId !== "" && <DisplayParadas paradas={paradas} />}
      <TiempoLinea
        paradaSeleccionada={paradaSeleccionada}
        tiempoEspera={tiempoEspera}
      />
    </header>

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
