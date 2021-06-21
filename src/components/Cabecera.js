import { TiempoLinea } from "./TiempoLinea";
import { DisplayParadas } from "./DisplayParadas";

export const Cabecera = (props) => {
  const { paradas, paradaSeleccionada } = props;
  return (
    <>
      <DisplayParadas paradas={paradas}/>
      <TiempoLinea />
    </>
  );
};
