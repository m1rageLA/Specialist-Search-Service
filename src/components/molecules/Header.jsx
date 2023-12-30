import React from "react";
import "./styles/css/molecules.css";

import LogoHeader from "../atoms/LogoHeader";

import SignIn from "../atoms/SignIn";
import SignUp from "../atoms/SignUp";
import logoImg from "../../assets/images/header__logo.png";
import LiHeader from "../atoms/LiHeader";

const Header = () => {
  return (
    <header className="header">
      <LogoHeader className="header__logo" to="/" src={logoImg} alt="logo" />
      <nav>
        <ul>
          <LiHeader to={"/"} text={"Main"} />
          <LiHeader to={"/"} text={"About"} />
          <LiHeader to={"/SignUpPage"} text={"Contact"} />
        </ul>
      </nav>
      <div className="header__signBlock">
        <div className="header__SignIn">
          <SignIn
            to={"/SignUpPage"}
            text={"Зарег"}
            className="header__signBlock-signIn"
          />
        </div>


        <SignUp
          to={"/SignUpPage"}
          text={"Зарегестрироваться"}
          className="header__signBlock-signUp"
        />
      </div>
    </header>
  );
};

export default Header;
