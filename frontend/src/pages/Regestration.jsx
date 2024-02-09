import React from "react";
import Header from "../components/common/Header";
import RegestrationForm from "../modules/RegestrationForm/RegestrationForm";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";

const Regestration = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Header />
        <RegestrationForm />
      </div>
    </ThemeProvider>
  );
};

export default Regestration;
