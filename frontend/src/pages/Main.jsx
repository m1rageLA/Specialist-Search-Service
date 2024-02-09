import React from "react";
import Header from "../components/common/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import { Box } from "@mui/material";
import HomeContent from "../components/HomeContent";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{...theme.box.variant_container}}>
          <Header />
          <HomeContent />
      </Box>
    </ThemeProvider>
  );
};

export default Main;
