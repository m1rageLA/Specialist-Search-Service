import { Box } from "@mui/material";
import React from "react";

export default function AuthorImg({ img, width }) {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        margin: "0 -6px 0",
        width: {width},
        height: {width},
        borderRadius: "80px",
        overflow: "hidden",
        float: "left",
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
