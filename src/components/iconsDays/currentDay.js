import React from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../containers/classIcons";

const CurrentDay = ({id}) => {
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

  if (id === 800) {
    iconWeatherCero = dayIcon;
  } else if (
    id === 802 ||
    id === 803 ||
    id === 804
  ) {
    iconWeatherCero = cloudyIcon;
  } else if (id === 801) {
    iconWeatherCero = cloudyDayIcon;
  } else if (
    id === 300 ||
    id === 301 ||
    id === 302 ||
    id === 310 ||
    id === 311 ||
    id === 312 ||
    id === 314 ||
    id === 321 ||
    id === 520 ||
    id === 521 ||
    id === 522 ||
    id === 531
  ) {
    iconWeatherCero = rainySixIcon;
  } else if (
    id === 500 ||
    id === 501 ||
    id === 502 ||
    id === 503 ||
    id === 504
  ) {
    iconWeatherCero = rainyThreeIcon;

  } else if (
    id === 600 ||
    id === 601 ||
    id === 602 ||
    id === 611 ||
    id === 612 ||
    id === 613 ||
    id === 615 ||
    id === 616 ||
    id === 620 ||
    id === 621 ||
    id === 622 ||
    id === 511
  ) {
    iconWeatherCero = snowySixIcon;
  } else if(
    id === 200 ||
    id === 201 ||
    id === 202 ||
    id === 210 ||
    id === 211 ||
    id === 212 ||
    id === 221 ||
    id === 230 ||
    id === 231 ||
    id === 232
  ){
    iconWeatherCero = thunderIcon;
  } else {
      iconWeatherCero = <FontAwesomeIcon icon={faAlignCenter}/>
  }

  return <img className="icon-main" src={iconWeatherCero} alt="icon" />;
};

export default CurrentDay;
