export const Cabecera = (props) => {
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
      <h2>Tiempo para la línea 60: 2 minutos</h2>
    </header>
  );
};
