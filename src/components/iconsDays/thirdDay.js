import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const ThridDay = ({clearSky}) => {
  const {
    dayIcon,
    cloudyIcon,
    cloudyDayIcon,
    rainySixIcon,
    rainyThreeIcon,
    snowySixIcon,
    thunderIcon,
  } = Icons;

  let iconWeatherCero;

  if (clearSky[2] === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    clearSky[2] === 802 ||
    clearSky[2] === 803 ||
    clearSky[2] === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (clearSky[2] === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    clearSky[2] === 300 ||
    clearSky[2] === 301 ||
    clearSky[2] === 302 ||
    clearSky[2] === 310 ||
    clearSky[2] === 311 ||
    clearSky[2] === 312 ||
    clearSky[2] === 314 ||
    clearSky[2] === 321 ||
    clearSky[2] === 520 ||
    clearSky[2] === 521 ||
    clearSky[2] === 522 ||
    clearSky[2] === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    clearSky[2] === 500 ||
    clearSky[2] === 501 ||
    clearSky[2] === 502 ||
    clearSky[2] === 503 ||
    clearSky[2] === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    clearSky[2] === 600 ||
    clearSky[2] === 601 ||
    clearSky[2] === 602 ||
    clearSky[2] === 611 ||
    clearSky[2] === 612 ||
    clearSky[2] === 613 ||
    clearSky[2] === 615 ||
    clearSky[2] === 616 ||
    clearSky[2] === 620 ||
    clearSky[2] === 621 ||
    clearSky[2] === 622 ||
    clearSky[2] === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    clearSky[2] === 200 ||
    clearSky[2] === 201 ||
    clearSky[2] === 202 ||
    clearSky[2] === 210 ||
    clearSky[2] === 211 ||
    clearSky[2] === 212 ||
    clearSky[2] === 221 ||
    clearSky[2] === 230 ||
    clearSky[2] === 231 ||
    clearSky[2] === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img src={iconWeatherCero} alt="icon" />;
};

export default ThridDay;