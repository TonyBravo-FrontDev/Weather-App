import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const FifthDay = ({clearSky}) => {
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

  if (clearSky[4] === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    clearSky[4] === 802 ||
    clearSky[4] === 803 ||
    clearSky[4] === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (clearSky[4] === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    clearSky[4] === 300 ||
    clearSky[4] === 301 ||
    clearSky[4] === 302 ||
    clearSky[4] === 310 ||
    clearSky[4] === 311 ||
    clearSky[4] === 312 ||
    clearSky[4] === 314 ||
    clearSky[4] === 321 ||
    clearSky[4] === 520 ||
    clearSky[4] === 521 ||
    clearSky[4] === 522 ||
    clearSky[4] === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    clearSky[4] === 500 ||
    clearSky[4] === 501 ||
    clearSky[4] === 502 ||
    clearSky[4] === 503 ||
    clearSky[4] === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    clearSky[4] === 600 ||
    clearSky[4] === 601 ||
    clearSky[4] === 602 ||
    clearSky[4] === 611 ||
    clearSky[4] === 612 ||
    clearSky[4] === 613 ||
    clearSky[4] === 615 ||
    clearSky[4] === 616 ||
    clearSky[4] === 620 ||
    clearSky[4] === 621 ||
    clearSky[4] === 622 ||
    clearSky[4] === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    clearSky[4] === 200 ||
    clearSky[4] === 201 ||
    clearSky[4] === 202 ||
    clearSky[4] === 210 ||
    clearSky[4] === 211 ||
    clearSky[4] === 212 ||
    clearSky[4] === 221 ||
    clearSky[4] === 230 ||
    clearSky[4] === 231 ||
    clearSky[4] === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img src={iconWeatherCero} alt="icon" />;
};

export default FifthDay;