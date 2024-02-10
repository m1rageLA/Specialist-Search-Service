import { Box } from "@mui/material";
import React from "react";

export default function AuthorImg({ img }) {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        margin: "0 -6px 0",
        width: "45px",
        height: "45px",
        borderRadius: "50px",
        overflow: "hidden",
        float: "right",
      }}
    >
        <img
          src={img}
          alt="team"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
    </Box>
  );
}
