import { Box, Typography } from "@mui/material";
import React from "react";
import Particle from "./Particle";
import theme from "../assets/theme";

export default function GrayBox(props) {
  const { width, children } = props;
  return (
    <Box
      sx={{
        backgroundColor: theme.box.variant1,
        display: "flex",
        flexDirection: "column",
        width: width,
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.props.var === "header") {
            return React.cloneElement(child, { sx: { color: "white" } });
          } else if (child.props.var === "text") {
            return React.cloneElement(child, {
              sx: { marginTop: "10px", color: theme.palette.items.main },
            });
          }
        }
        return child;
      })}
      <Box sx={{ width: "100%", textAlign: "end" }}>
        <Particle color={theme.palette.particle1} />
        <Particle color={theme.palette.particle2} />
        <Particle color={theme.palette.particle3} />
      </Box>
    </Box>
  );
}
