import { useState } from "react";

export const Formulario = (props) => {
const {numeroParada,setNumeroParada,}

}
  return (
    <>
    <div className="formulario-editar">
      <section className="forms">
        <form>
          <label htmlFor="num-parada">Parada nº: </label>
          <input
          type="number"
           id="num-parada"
           value = {num-parada}
           />
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

    </div>
    </>
  );
