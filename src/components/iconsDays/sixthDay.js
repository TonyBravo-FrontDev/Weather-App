import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const SixthDay = ({clearSky}) => {
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

  if (clearSky[5] === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    clearSky[5] === 802 ||
    clearSky[5] === 803 ||
    clearSky[5] === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (clearSky[5] === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    clearSky[5] === 300 ||
    clearSky[5] === 301 ||
    clearSky[5] === 302 ||
    clearSky[5] === 310 ||
    clearSky[5] === 311 ||
    clearSky[5] === 312 ||
    clearSky[5] === 314 ||
    clearSky[5] === 321 ||
    clearSky[5] === 520 ||
    clearSky[5] === 521 ||
    clearSky[5] === 522 ||
    clearSky[5] === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    clearSky[5] === 500 ||
    clearSky[5] === 501 ||
    clearSky[5] === 502 ||
    clearSky[5] === 503 ||
    clearSky[5] === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    clearSky[5] === 600 ||
    clearSky[5] === 601 ||
    clearSky[5] === 602 ||
    clearSky[5] === 611 ||
    clearSky[5] === 612 ||
    clearSky[5] === 613 ||
    clearSky[5] === 615 ||
    clearSky[5] === 616 ||
    clearSky[5] === 620 ||
    clearSky[5] === 621 ||
    clearSky[5] === 622 ||
    clearSky[5] === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    clearSky[5] === 200 ||
    clearSky[5] === 201 ||
    clearSky[5] === 202 ||
    clearSky[5] === 210 ||
    clearSky[5] === 211 ||
    clearSky[5] === 212 ||
    clearSky[5] === 221 ||
    clearSky[5] === 230 ||
    clearSky[5] === 231 ||
    clearSky[5] === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img src={iconWeatherCero} alt="icon" />;
};

export default SixthDay;