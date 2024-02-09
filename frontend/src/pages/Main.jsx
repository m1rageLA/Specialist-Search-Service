import React from "react";
import Header from "../components/common/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import { Box } from "@mui/material";
import MainContent from "../components/MainContent";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{...theme.box.variant_container}}>
          <Header />
          <MainContent />
      </Box>
    </ThemeProvider>
  );
};

export default Main;
