import { Box, Typography } from "@mui/material";
import React from "react";
import Particle from "../../ui/Particle";
import theme from "../../assets/theme";

export default function ContentBlockV1({ ...props }) {
  return (
    <Box marginTop={12} width={"100%"} height={320} display={"flex"}>
      <Box width={"100%"} display={"flex"}>
        <Box
          width={"70%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Typography
            fontSize={"15px"}
            color={theme.palette.items.main}
            variant="h6"
          >
            {props.preHeader}
          </Typography>
          <Typography
            sx={{ marginBottom: "15px" }}
            variant="h5"
            color={theme.palette.itemsLight}
          >
            {props.header}
          </Typography>
          <Box sx={{ backgroundColor: theme.box.variant1 }}>
            <Typography
              sx={{ marginBottom: "15px" }}
              color={theme.palette.itemsLight}
            >
              {props.title}
            </Typography>
            <Typography color={theme.palette.items.main}>{props.text}</Typography>
            <Box sx={{width: "100%", textAlign: "end"}}>
              <Particle color={theme.palette.particle1} />
              <Particle color={theme.palette.particle2} />
              <Particle color={theme.palette.particle3} />
            </Box>
          </Box>
        </Box>
        <Box
          width={"45%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"end"}
        >
          <img
            style={{ width: "200px", height: "230px" }}
            src={props.img}
            alt={props.alt}
          />
        </Box>
      </Box>
    </Box>
  );
}
