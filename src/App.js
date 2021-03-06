import { useState, useEffect } from "react";
import { Cabecera } from "./components/Cabecera";
import { FormularioBusquedaParada } from "./components/FormularioBusquedaParada";
import { FormularioTiempoLinea } from "./components/FormularioTiempoLinea";

function App() {
  const numeroParada = 151;
  const APIparada = "https://api.tmb.cat/v1/ibus/stops/";
  const APIExisteParada = "https://api.tmb.cat/v1/transit/parades/";
  const appId = "47477a69";
  const appKey = "47f5463a34dce827b9368dc2e35202f5";
  const [paradaSeleccionada, setParadaSeleccionada] = useState("");

  const [paradas, setParadas] = useState([
    {
      routeId: "",
      line: "",
      "text-ca": "",
      "t-in-s": 0,
      destination: "",
      "t-in-min": 0,
    },
  ]);

  const ParadasTMB = async (urlAPI, numparada, appId, appKey) => {
    const direccionURL =
      urlAPI + numparada + "?app_id=" + appId + "&app_key=" + appKey;
    const resp = await fetch(direccionURL);
    const Paradas = await resp.json();
    console.log(Paradas.data.ibus);
    return Paradas.data.ibus;
  };

  const existeParada = async (urlAPI, appId, appKey, numeroParada) => {
    const response = await fetch(
      `${urlAPI}${numeroParada}?app_id=${appId}&app_key=${appKey}`
    );

    const json = await response.json();

    if (json.totalFeatures === 0) {
      return false;
    }
    return true;
  };

  const getParadas = async (e, parada) => {
    e.preventDefault();
    const resultado = await existeParada(
      APIExisteParada,
      appId,
      appKey,
      parada
    );

    console.log(
      resultado
        ? "aqui tienes la parada " + parada
        : "no existe la parada " + parada
    );
    if (resultado) {
      setParadas(await ParadasTMB(APIparada, parada, appId, appKey));
    }
  };
  useEffect(() => setParadaSeleccionada(paradas[0].line), [paradas]);
  return (
    <div className="contenedor">
      <Cabecera paradas={paradas} paradaSeleccionada={paradaSeleccionada} />
      <section className="forms">
        <FormularioBusquedaParada getParadas={getParadas} />
        <FormularioTiempoLinea/>
      </section>
      {/* <header className="cabecera">
        <h2>Bus 109 - Hospital Cl??nic / Pol??gon Zona Franca</h2>
        <h3>Pol??gon Zona Franca -> Hospital Cl??nic</h3>
        <a href="#">Volver a la portada</a>
      </header>
      <section>
        <ul className="grafico-paradas">
          <li className="parada">Parada n?? X: Nombre parada (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada n?? 1741: Cotxeres TB Zona Franca (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada n?? 1045: Pg Zona Franca - Motors (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada n?? 1615: Carrer n??mero 4 - Carrer D (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada n?? 1639: Carrer A- Comissaria Portu??ria (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada n?? 1643: Mercabarna - Mercat del Peix (<a href="#">ver mapa</a>)</li>
        </ul>
      </section> */}
    </div>
  );
}

export default App;
