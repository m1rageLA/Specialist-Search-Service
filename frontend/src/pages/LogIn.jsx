import React from "react";
import Header from "../components/common/Header";
import LogInForm from "../modules/LogInForm/LogInForm";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import { Box } from "@mui/material";

const LogIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{...theme.box.variant_container}}>
        <Header />
        <LogInForm style={{ flex: 1 }} />
      </Box>
    </ThemeProvider>
  );
};

export default LogIn;
