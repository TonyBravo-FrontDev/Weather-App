import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const FourthDay = ({clearSky}) => {
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

  if (clearSky[3] === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    clearSky[3] === 802 ||
    clearSky[3] === 803 ||
    clearSky[3] === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (clearSky[3] === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    clearSky[3] === 300 ||
    clearSky[3] === 301 ||
    clearSky[3] === 302 ||
    clearSky[3] === 310 ||
    clearSky[3] === 311 ||
    clearSky[3] === 312 ||
    clearSky[3] === 314 ||
    clearSky[3] === 321 ||
    clearSky[3] === 520 ||
    clearSky[3] === 521 ||
    clearSky[3] === 522 ||
    clearSky[3] === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    clearSky[3] === 500 ||
    clearSky[3] === 501 ||
    clearSky[3] === 502 ||
    clearSky[3] === 503 ||
    clearSky[3] === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    clearSky[3] === 600 ||
    clearSky[3] === 601 ||
    clearSky[3] === 602 ||
    clearSky[3] === 611 ||
    clearSky[3] === 612 ||
    clearSky[3] === 613 ||
    clearSky[3] === 615 ||
    clearSky[3] === 616 ||
    clearSky[3] === 620 ||
    clearSky[3] === 621 ||
    clearSky[3] === 622 ||
    clearSky[3] === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    clearSky[3] === 200 ||
    clearSky[3] === 201 ||
    clearSky[3] === 202 ||
    clearSky[3] === 210 ||
    clearSky[3] === 211 ||
    clearSky[3] === 212 ||
    clearSky[3] === 221 ||
    clearSky[3] === 230 ||
    clearSky[3] === 231 ||
    clearSky[3] === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img src={iconWeatherCero} alt="icon" />;
};

export default FourthDay;