import { useState } from "react";

export const FormularioBusquedaParada = (props) => {
  const { getParadas } = props;
  const [parada, setParada] = useState("");

  return (
    <form onSubmit={(e) => getParadas(e, parada)}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input
        type="number"
        id="num-parada"
        value={parada}
        onChange={(e) => setParada(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
