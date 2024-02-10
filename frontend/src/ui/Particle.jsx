import { Box } from "@mui/material";
import React from "react";

export default function Particle({ color }) {
  return (
    <Box
      sx={{
        backgroundColor: color,
        display: "inline-block",
        margin: "15px 3px 0",
        width: "14px",
        height: "14px",
        borderRadius: "50px",
      }}
    />
  );
}
