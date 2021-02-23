import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const SecondDay = ({clearSky}) => {
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

  if (clearSky[1] === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    clearSky[1] === 802 ||
    clearSky[1] === 803 ||
    clearSky[1] === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (clearSky[1] === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    clearSky[1] === 300 ||
    clearSky[1] === 301 ||
    clearSky[1] === 302 ||
    clearSky[1] === 310 ||
    clearSky[1] === 311 ||
    clearSky[1] === 312 ||
    clearSky[1] === 314 ||
    clearSky[1] === 321 ||
    clearSky[1] === 520 ||
    clearSky[1] === 521 ||
    clearSky[1] === 522 ||
    clearSky[1] === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    clearSky[1] === 500 ||
    clearSky[1] === 501 ||
    clearSky[1] === 502 ||
    clearSky[1] === 503 ||
    clearSky[1] === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    clearSky[1] === 600 ||
    clearSky[1] === 601 ||
    clearSky[1] === 602 ||
    clearSky[1] === 611 ||
    clearSky[1] === 612 ||
    clearSky[1] === 613 ||
    clearSky[1] === 615 ||
    clearSky[1] === 616 ||
    clearSky[1] === 620 ||
    clearSky[1] === 621 ||
    clearSky[1] === 622 ||
    clearSky[1] === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    clearSky[1] === 200 ||
    clearSky[1] === 201 ||
    clearSky[1] === 202 ||
    clearSky[1] === 210 ||
    clearSky[1] === 211 ||
    clearSky[1] === 212 ||
    clearSky[1] === 221 ||
    clearSky[1] === 230 ||
    clearSky[1] === 231 ||
    clearSky[1] === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img src={iconWeatherCero} alt="icon" />;
};

export default SecondDay;