import { Box, Typography } from "@mui/material";
import React from "react";
import Particle from "../../ui/Particle";
import theme from "../../assets/theme";

export default function ImageTextV1({ ...props }) {
  return (
    <Box width={"100%"} marginTop={12} display={"flex"}>
      <Box width={"100%"} display={"flex"}>


        {/*--- LEFT PART ---*/}
        <Box
          width={"55%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 50px 0 0"
          }}
        >
          <Typography
            sx={{ marginBottom: "15px" }}
            variant="h5"
            color={theme.palette.itemsLight}
          >
            {props.header}
          </Typography>
          <Typography color={theme.palette.items.main}>
            {props.secondText}
          </Typography>
        </Box>


        {/*--- RIGHT PART ---*/}
        <Box
          width={"50%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Box sx={{ backgroundColor: theme.box.variant1 }}>
            <Typography
              sx={{ marginBottom: "15px" }}
              color={theme.palette.itemsLight}
            >
              {props.title}
            </Typography>
            <Typography color={theme.palette.items.main}>
              {props.text}
            </Typography>
            <Particle color={theme.palette.particle1} />
            <Particle color={theme.palette.particle2} />
            <Particle color={theme.palette.particle3} />
          </Box>
        </Box>


      </Box>
    </Box>
  );
}
