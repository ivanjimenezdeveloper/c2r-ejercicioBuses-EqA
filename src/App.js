import { useState } from "react";
import { Cabecera } from "./components/Cabecera";

function App() {
  const paradas = [
    {
      routeId: "0681",
      line: "68",
      "text-ca": "10 min",
      "t-in-s": 638,
      destination: "Hospital Clínic",
      "t-in-min": 10,
    },
    {
      routeId: "0781",
      line: "78",
      "text-ca": "19 min",
      "t-in-s": 1149,
      destination: "Estació de Sants",
      "t-in-min": 19,
    },
    {
      routeId: "0671",
      line: "67",
      "text-ca": "21 min",
      "t-in-s": 1288,
      destination: "Pl. Catalunya",
      "t-in-min": 21,
    },
  ];

  const [paradaSeleccionada, setParadaSeleccionada] = useState("68");

  return (
    <div className="contenedor">
      <Cabecera paradas={paradas} paradaSeleccionada={paradaSeleccionada} />
      <section className="forms">
        <form>
          <label htmlFor="num-parada">Parada nº: </label>
          <input type="number" id="num-parada" />
          <button type="submit">Buscar</button>
        </form>
        <form>
          <label htmlFor="tiempo-linea">
            Tiempo para que llegue la línea:{" "}
          </label>
          <select id="tiempo-linea">
            <option value="">Elige línea</option>
          </select>
        </form>
      </section>
      {/* <header className="cabecera">
        <h2>Bus 109 - Hospital Clínic / Polígon Zona Franca</h2>
        <h3>Polígon Zona Franca -> Hospital Clínic</h3>
        <a href="#">Volver a la portada</a>
      </header>
      <section>
        <ul className="grafico-paradas">
          <li className="parada">Parada nº X: Nombre parada (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1741: Cotxeres TB Zona Franca (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1045: Pg Zona Franca - Motors (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1615: Carrer número 4 - Carrer D (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1639: Carrer A- Comissaria Portuària (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1643: Mercabarna - Mercat del Peix (<a href="#">ver mapa</a>)</li>
        </ul>
      </section> */}
    </div>
  );
}

export default App;
