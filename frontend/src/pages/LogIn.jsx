import React from "react";
import Header from "../components/common/Header";
import LogInForm from "../modules/LogInForm/LogInForm";

const LogIn = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <LogInForm style={{ flex: 1 }} />
    </div>
  );
};

export default LogIn;
