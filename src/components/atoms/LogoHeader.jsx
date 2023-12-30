import React from "react";
import "./styles/css/atoms.css";
import { NavLink } from "react-router-dom";

const LogoHeader = (props) => {
    const header__logo = {
        width: "60px",

    }
  return (
    <NavLink className={header__logo} linkTo={props.navTo}>
      <img style={header__logo} src={props.src} alt={props.alt}></img>
    </NavLink>
  );
};

export default LogoHeader;
