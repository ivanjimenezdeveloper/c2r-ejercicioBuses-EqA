export const TiempoLinea = (props) => {
  const { paradaSeleccionada, tiempoEspera } = props;
  return (
    <h2>
      Tiempo para la línea {paradaSeleccionada}: {tiempoEspera}
    </h2>
  );
};
