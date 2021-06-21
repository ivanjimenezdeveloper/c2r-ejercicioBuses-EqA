export const FormularioTiempoLinea = (props) => {
  const datos =
 [
        {
          "routeId": "0681",
          "line": "68",
          "text-ca": "10 min",
          "t-in-s": 638,
          "destination": "Hospital Clínic",
          "t-in-min": 10
        },
        {
          "routeId": "0781",
          "line": "78",
          "text-ca": "19 min",
          "t-in-s": 1149,
          "destination": "Estació de Sants",
          "t-in-min": 19
        },
        {
          "routeId": "0671",
          "line": "67",
          "text-ca": "21 min",
          "t-in-s": 1288,
          "destination": "Pl. Catalunya",
          "t-in-min": 21
        }
      ];


return (

<form>
  <label htmlFor="tiempo-linea">
    Tiempo para que llegue la línea:{" "}
  </label>
  <select id="tiempo-linea">
    <option value="">Elige línea</option>
    {datos.map((bus) => (
      <option value="">{bus.line}</option>
    ))}
  </select>
</form>
);

};
