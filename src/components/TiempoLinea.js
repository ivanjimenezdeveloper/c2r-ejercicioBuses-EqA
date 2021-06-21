import PropTypes from "prop-types";

export const TiempoLinea = (props) => {
  const { paradaSeleccionada, tiempoEspera } = props;
  return (
    <h2>
      Tiempo para la línea {paradaSeleccionada}: {tiempoEspera}
    </h2>
  );
};

TiempoLinea.propTypes = {
  paradaSeleccionada: PropTypes.string.isRequired,
  tiempoEspera: PropTypes.string.isRequired,
};
