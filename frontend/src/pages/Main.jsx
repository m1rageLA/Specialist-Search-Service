import React from "react";
import Header from "../components/common/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import { Box } from "@mui/material";
import MainContent from "../components/MainContent";
import Footer from "../components/common/Footer";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{...theme.box.variant_container}}>
          <Header />
          <MainContent />
          <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Main;
