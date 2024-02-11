import React from "react";
import Header from "../components/common/Header";
import LogInForm from "../modules/LogInForm/LogInForm";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import { Box } from "@mui/material";

const LogIn = () => {
  return (
    <ThemeProvider theme={theme}>
            <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.primaryBackground,
        }}
      >
        <Header />
        <LogInForm style={{ flex: 1 }} />
      </div>
    </ThemeProvider>
  );
};

export default LogIn;
