import React from "react";
import CurrentDay from "./iconsDays/currentDay";
import "../sass/main/mainhead.scss";

const MainApp = ({ resultado }) => {
  const { temp } = resultado.data.current;
  const { main } = resultado.data.current.weather[0];
  const { id } = resultado.data.current.weather[0];

  let celcius = temp - 273.15;
  return (
    <main className="container-main">
      <section className="content-temp">
        <h1>{celcius.toFixed(0)}°</h1>
        <div>
          <CurrentDay id={id} />
          <h3>{main}</h3>
        </div>
      </section>
    </main>
  );
};

export default MainApp;
