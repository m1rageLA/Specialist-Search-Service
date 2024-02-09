import { makeStyles } from "@mui/styles";

const useTheme = makeStyles({
  header: {
    "& .MuiAppBar-root": { // убрано body из селектора
      backgroundColor: "red",
    },
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiButton-root": {
      color: "#0E7C54",
    },
    "& .MuiListItem-root": {
      color: "#C2C2C2",
    },
  },

  buttonV1: {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: "darkred",
    },
  },
});

export default useTheme;
