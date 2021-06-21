import PropTypes from "prop-types";

export const numeroParadaSchema = PropTypes.shape({
  numero_parada: PropTypes.string.isRequired,
}).isRequired;

export const tiempoLineaSchema = PropTypes.shape({
  tiempo_linea: PropTypes.array.isRequired,
}).isRequired;
