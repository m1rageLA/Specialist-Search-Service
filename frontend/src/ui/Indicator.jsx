import { Box, Typography } from "@mui/material";
import React from "react";

export default function Indicator({ variant, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90px",
        height: "35px",
        backgroundColor:
          variant === "easy"
            ? "#91CF98"
            : variant === "medium"
            ? "#D7D480"
            : variant === "hard"
            ? "#CF9191"
            : "#7b72b3",
        borderRadius: "20px",
        marginRight: "8px"
      }}
    >
      <Typography>{text}</Typography>
    </Box>
  );
}
