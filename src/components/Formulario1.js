import { DateTime } from "luxon";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import { numeroParadaSchema } from "../schemas/numeroParadaSchemas";

export const Formulario1 = (props) => {
  const { numeroParadas, setNumeroParadas} = props;
  const {
    datos: { numeroParada},
    formularioInvalido,
    setDato,
  } = useFormulario(numeroParada);
  const enviaParada = (e) => {
    e.preventDefault();
    setNumeroParadas({ numeroParada });
  };
  const onChangenumeroParada= (e) => {
    setDato(e);
  };
/*   useEffect(() => {
    if (fechaNacimiento === "") {
      return;
    }
    const fechaNacimientoDate = DateTime.fromFormat(
      fechaNacimiento,
      "yyyy-MM-dd"
    );
    setEdad(fechaNacimientoDate.diffNow("years"));
  }, [fechaNacimiento]); */
  return (
    <>
      <form>
        <label htmlFor="num-parada">Parada nº: </label>
        <input
          type="number"
          id="num-parada"
          value={numeroParada}
          onChange={setDato}
        />
        <button
          type="submit"
          disabled={formularioInvalido}
        >
          Buscar
        </button>
      </form>
    </>
  );
};

Formulario1.propTypes = {
  numero_parada: numeroParadaSchema,
  avanzaPaso: PropTypes.func.isRequired,
};


