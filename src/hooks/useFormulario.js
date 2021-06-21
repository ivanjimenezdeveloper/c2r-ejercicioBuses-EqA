import { useEffect, useState } from "react";

export const useFormulario = (datosIniciales) => {
  const [datos, setDatos] = useState(datosIniciales);
  const [formularioInvalido, setFormularioInvalido] = useState(true);
  const setDato = (e) => {
    setDatos({
      ...datos,
    });
  };
  useEffect(() => {
    setFormularioInvalido(false);
    for (const i in datos) {
      if (datos[i] === "") {
        setFormularioInvalido(true);
        break;
      }
    }
  }, [datos]);
  return {
    datos,
    formularioInvalido,
    setDato,
  };
};
