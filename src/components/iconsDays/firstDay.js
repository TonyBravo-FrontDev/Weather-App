import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const FirstDay = ({clearSky}) => {
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

  if (clearSky[0] === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    clearSky[0] === 802 ||
    clearSky[0] === 803 ||
    clearSky[0] === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (clearSky[0] === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    clearSky[0] === 300 ||
    clearSky[0] === 301 ||
    clearSky[0] === 302 ||
    clearSky[0] === 310 ||
    clearSky[0] === 311 ||
    clearSky[0] === 312 ||
    clearSky[0] === 314 ||
    clearSky[0] === 321 ||
    clearSky[0] === 520 ||
    clearSky[0] === 521 ||
    clearSky[0] === 522 ||
    clearSky[0] === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    clearSky[0] === 500 ||
    clearSky[0] === 501 ||
    clearSky[0] === 502 ||
    clearSky[0] === 503 ||
    clearSky[0] === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    clearSky[0] === 600 ||
    clearSky[0] === 601 ||
    clearSky[0] === 602 ||
    clearSky[0] === 611 ||
    clearSky[0] === 612 ||
    clearSky[0] === 613 ||
    clearSky[0] === 615 ||
    clearSky[0] === 616 ||
    clearSky[0] === 620 ||
    clearSky[0] === 621 ||
    clearSky[0] === 622 ||
    clearSky[0] === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    clearSky[0] === 200 ||
    clearSky[0] === 201 ||
    clearSky[0] === 202 ||
    clearSky[0] === 210 ||
    clearSky[0] === 211 ||
    clearSky[0] === 212 ||
    clearSky[0] === 221 ||
    clearSky[0] === 230 ||
    clearSky[0] === 231 ||
    clearSky[0] === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img src={iconWeatherCero} alt="icon" />;
};

export default FirstDay;
