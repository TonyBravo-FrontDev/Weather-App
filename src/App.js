import React, { Fragment, useEffect, useState } from "react";
import Navegation from "./components/Navegation";
import MainApp from "./components/MainApp";
import axios from "axios";
import "./sass/globalstyle.scss";

function App() {
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    // Obtenemos la localización actual del dispositivo
    if (navigator.geolocation) {
      const getApi = () => {
        navigator.geolocation.getCurrentPosition(getData);

        async function getData(position) {
          const apiKey = process.env.REACT_APP_KEY_WEATHER;
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

          const request = await axios.get(url);

          const result = request;
          setResultado(result);
        }
      };

      getApi();
    }
  }, []);
  return (
    <Fragment>
      {resultado ? <Navegation resultado={resultado} /> : null}
      {resultado ? <MainApp resultado={resultado} /> : null}
    </Fragment>
  );
}

export default App;
