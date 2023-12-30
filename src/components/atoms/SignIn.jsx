import React from "react";
import "./styles/css/atoms.css";
import { NavLink } from "react-router-dom";

const SignIn = ({ to, text }) => {
  return (
    <NavLink className="header__li" to={to} activeClassName="active">
      {text}
    </NavLink>
  );
};

export default SignIn;
