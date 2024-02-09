import React from "react";
import HomeContent from "../components/HomeContent";
import Header from "../components/common/Header";
import "../assets/styles/theme/css/theme.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import { Box } from "@mui/material";
import CheckToken from "../modules/CheckToken/CheckToken";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
      }}
    >
    <ThemeProvider theme={theme}>
      <Box sx={{...theme.box.variant_container}}>
        <CheckToken>
          <Header />
          <HomeContent />
        </CheckToken>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default Home;
