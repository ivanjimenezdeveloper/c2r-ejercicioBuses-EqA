import { useState, useEffect } from "react";

export const DisplayParadas = (props) => { 

 const [listaLineas, setLineas] = useState(
   [
    {
      routeId: "0681",
      line: "68",
      "text-ca": "10 min",
      "t-in-s": 638,
      destination: "Hospital Clínic",
      "t-in-min": 10,
    },
    {
      routeId: "0781",
      line: "78",
      "text-ca": "19 min",
      "t-in-s": 1149,
      destination: "Estació de Sants",
      "t-in-min": 19,
    },
    {
      routeId: "0671",
      line: "67",
      "text-ca": "21 min",
      "t-in-s": 1288,
      destination: "Pl. Catalunya",
      "t-in-min": 21,

    }
      ]
 );

  const [posicion, setPosicion] = useState("0px");
  const maxPosition = listaLineas.length;
  const [contador, setContador] = useState(0);
  useEffect(() => listaLineas.map(() => {
        if (contador === maxPosition) {
          setContador(0);
          setPosicion("0px");
        } else {
          setPosicion(`${posicion - 30}px`);
          setContador(contador + 1);
        }
      }),
    [contador, listaLineas, maxPosition, posicion]
  );
return (
<>
  <h1>Parada nº15</h1> 
    <div className="display">
      <div className="carousel" style={{ top: posicion }}>
        {listaLineas.map((linea) => (
          <div key={linea.line} className="bus">
            <span className="linea">{linea.line}</span>
            <span className="destino">{linea.destination}</span>
            <span className="tiempo">{linea["text-ca"]}</span>
          </div>
        ))}
      </div>
    </div>
  </>  
  );
};
