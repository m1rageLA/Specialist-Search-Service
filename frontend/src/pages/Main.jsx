import React from "react";
import CheckToken from "../modules/CheckToken/CheckToken";
import Header from "../components/common/Header";
import MainContent from "../components/MainContent";

const Main = () => {
  return (
    <CheckToken>
      <Header />
      <MainContent />
    </CheckToken>
  );
};

export default Main;
