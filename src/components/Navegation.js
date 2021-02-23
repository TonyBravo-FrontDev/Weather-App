import React, { Fragment } from "react";
import WeatherDetails from "./WeatherDetails";
import "../sass/navegation/nav.scss";

const Navegation = ({ resultado }) => {

  const btnMenu = () => {
    document.querySelector(".btn-menu").classList.toggle("open");
    document.querySelector(".nav-app-menu").classList.toggle("open");
  };

  return (
    <Fragment>
      <header id="header">
        <nav className="container-nav">
          <div id="logo">
            <a>WeatherApp.</a>
          </div>

          <button onClick={btnMenu} type="button" className="btn-menu">
            <div></div>
          </button>

          <WeatherDetails resultado={resultado} />
        </nav>
      </header>
    </Fragment>
  );
};

export default Navegation;

