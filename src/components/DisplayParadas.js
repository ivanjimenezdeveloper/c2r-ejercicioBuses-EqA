import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export const DisplayParadas = (props) => { 
  const [posicion, setPosicion] = useState("0");
  useEffect(() => {
    setTimeout(() => setPosicion("-60px"), 2000);
  }, []);
    const paradas = [

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
      ];

     return (

            <header className="cabecera">
                <h1>Parada nº{paradas.routeId}</h1> 
                <div className="display"> 
                  <div className="carousel" style={{
                                            top: posicion.current,
                                            }}>
                        {paradas.map((paradas) => 
                        <div className="bus">
                              <span className="linea">{paradas.line}</span>
                              <span className="destino">{paradas.destination}</span>
                              <span className="tiempo">{paradas["t-in-min"]}min</span>
                          </div>
                        )}
                  </div>
                </div>
            </header>   
            
     );
    };


