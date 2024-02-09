import { createTheme } from "@mui/material/styles";

const primary = "#2B2B2E";    // Gray 1
const secondary = "#212124";  // Gray 2
const tertiary = "#38383D";   // Gray 3
const items = "#C2C2C2";      // Gray 4
const itemsLight = "#ededed"; // Gray 5
const logo = "#fcfcfc";       // White
const button = "#00BF7A";     // Green 1
const particle1 = "#00BF7A"   //Green light
const particle2 = "#00A56A"   //Green medium
const particle3 = "#008455";  //Green dark

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
    },
    items: {
      main: items,
    },
    button: button,
    logo: logo,
    itemsLight: itemsLight,
    particle1: particle1,
    particle2: particle2,
    particle3: particle3,
  },
  typography: {
    h6: {
      color: "#ffffff",
    },
    h5: {
      color: "#e6e6e6",
    },
  },

  //------CUSTOM------
  box: {
    variant1: {
      padding: "45px 30px",
      borderRadius: "18px",
      backgroundColor: "#2f2f33",
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    },
    variant_container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: primary,
    },
  },

  textField: {
    variant1: {
      width: "300px",
      marginBottom: "20px",
      backgroundColor: "#2D2D33",
      border: "solid 1px #242429",
      "& label": {
        color: "#a1a1a1",
        padding: "5px 0",
        fontSize: "14px",
      },
      "& input": {
        color: "white",
        padding: "30px 0 5px 12px",
      },
    },
  },

  button: {
    variant1: {
      color: "white",
      backgroundColor: "#0E7C54",
      "&:hover": {
        backgroundColor: "#0c6149",
      },
    },

    varinat_header: {
      color: "white",
      backgroundColor: "#0E7C54"
    }
  },

  checkbox: {
    variant1: {
      color: "#C2C2C2",
      padding: "0",
      margin: "0 0 20px 0",
    },
  },
});


export default theme;
