import React, { Fragment } from "react";
import FirstDay from "./iconsDays/firstDay";
import SecondDay from "./iconsDays/secondDay";
import ThridDay from "./iconsDays/thirdDay";
import FourthDay from "./iconsDays/fourthDay";
import FifthDay from "./iconsDays/fifthDay";
import SixthDay from "./iconsDays/sixthDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faMapMarkerAlt,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const WeatherDetails = ({ resultado }) => {

  const {
    humidity,
    clouds,
    pressure,
    visibility,
    wind_speed,
    uvi,
  } = resultado.data.current;


  let max = resultado.data.daily.map((day) => day.temp.max);
  let min = resultado.data.daily.map((day) => day.temp.min);
  let clearSky = resultado.data.daily.map((icon) => icon.weather[0].id);

  let kelvin = 273.15;

  return (
    <Fragment>
      <div className="nav-app-menu">
        <div className="navbar-dark">
          <div>
            <p>City</p>
            <h2>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                color={`#707070`}
                className="icon-map"
              />
              <span>Your Location</span>
            </h2>
          </div>
        </div>

        <div className="details next-days">
          <div className="days-column">
            <div className="content-next">
              <h4 className="description-color-disabled days">We</h4>
              <FirstDay clearSky={clearSky} />
              <p className="results-app">
                {parseInt(max[0] - kelvin).toFixed(0)}°
              </p>
              <p className="result-min">
                {parseInt(min[0] - kelvin).toFixed(0)}°
              </p>
            </div>
          </div>
          <div className="days-column">
            <div className="content-next">
              <h4 className="description-color-disabled days">Th</h4>
              <SecondDay clearSky={clearSky} />
              <p className="results-app">
                {parseInt(max[1] - kelvin).toFixed(0)}°
              </p>
              <p className="result-min">
                {parseInt(min[1] - kelvin).toFixed(0)}°
              </p>
            </div>
          </div>
          <div className="days-column">
            <div className="content-next">
              <h4 className="description-color-disabled days">Fr</h4>
              <ThridDay clearSky={clearSky} />
              <p className="results-app">
                {parseInt(max[2] - kelvin).toFixed(0)}°
              </p>
              <p className="result-min">
                {parseInt(min[2] - kelvin).toFixed(0)}°
              </p>
            </div>
          </div>
          <div className="days-column">
            <div className="content-next">
              <h4 className="description-color-disabled days">Sa</h4>
              <FourthDay clearSky={clearSky} />
              <p className="results-app">
                {parseInt(max[3] - kelvin).toFixed(0)}°
              </p>
              <p className="result-min">
                {parseInt(min[3] - kelvin).toFixed(0)}°
              </p>
            </div>
          </div>
          <div className="days-column">
            <div className="content-next">
              <h4 className="description-color-disabled days">Su</h4>
              <FifthDay clearSky={clearSky} />
              <p className="results-app">
                {parseInt(max[4] - kelvin).toFixed(0)}°
              </p>
              <p className="result-min">
                {parseInt(min[4] - kelvin).toFixed(0)}°
              </p>
            </div>
          </div>
          <div className="days-column">
            <div className="content-next">
              <h4 className="description-color-disabled days">Mo</h4>
              <SixthDay clearSky={clearSky} />
              <p className="results-app">
                {parseInt(max[5] - kelvin).toFixed(0)}°
              </p>
              <p className="result-min">
                {parseInt(min[5] - kelvin).toFixed(0)}°
              </p>
            </div>
          </div>
        </div>

        <div className="container-air-wind">
          <div className="columns-air-wind air">
            <div className="column-air-icon">
              <FontAwesomeIcon
                icon={faFeatherAlt}
                color={`#9FA6A1`}
                className="icons-airs"
              />
            </div>
            <div className="column-air">
              <h5>{uvi}</h5>
              <p>UV intensity index</p>
            </div>
          </div>
          <div className="columns-air-wind wind">
            <div className="column-air-icon">
              <FontAwesomeIcon
                icon={faWind}
                color={`#9FA6A1`}
                className="icons-airs"
              />
            </div>
            <div className="column-air">
              <h5>{wind_speed.toFixed(1)}</h5>
              <p>km/h</p>
            </div>
          </div>
        </div>

        <div className="details">
          <h2 className="title-description">Weather details</h2>
          <div>
            <h4 className="description-color-disabled">Cloudy</h4>
            <p className="results-app">{clouds}%</p>
          </div>
          <div>
            <h4 className="description-color-disabled">Pressure</h4>
            <p className="results-app">{pressure} hPa</p>
          </div>
          <div>
            <h4 className="description-color-disabled">Humidity</h4>
            <p className="results-app">{humidity}%</p>
          </div>
          <div>
            <h4 className="description-color-disabled">Visibility</h4>
            <p className="results-app">{visibility}m</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WeatherDetails;
