import { TiempoLinea } from "./TiempoLinea";

export const Cabecera = (props) => {
  const { paradas, paradaSeleccionada } = props;
  const getTiempoEspera = (paradas, paradaSeleccionada) => {
    debugger;
    const tiempoEspera = paradas.find((parada) =>
      parada.line === paradaSeleccionada ? parada : ""
    );

    return tiempoEspera["text-ca"];
  };

  const tiempoEspera = getTiempoEspera(paradas, paradaSeleccionada);

  return (
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
  );
};
