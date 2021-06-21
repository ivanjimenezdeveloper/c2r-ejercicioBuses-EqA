
export const DisplayParadas = (props) => { 
   const {routeId, line, destination, time} = props;
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
    <>
            <header className="cabecera">
                <h1>{routeId}</h1>
                <div className="display">
                    <div className="bus">
                    <span className="linea">{line}</span>
                    <span className="destino">{destination}</span>
                    <span className="tiempo">10min</span>
                    </div>
                </div>
                {paradas.map((parada) => <h1>{parada.routeId}</h1>)} 
                {paradas.map((parada) => <span className="linea">{parada.routeId}</span>)}
                {paradas.map((parada) => <span className="destino">{parada.destination}</span>)}
                
                
            </header>
    </>
    );
};