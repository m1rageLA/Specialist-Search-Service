import { Box, Typography } from "@mui/material";
import React from "react";
import Particle from "../../ui/Particle";
import theme from "../../assets/theme";
import AuthorImg from "../../ui/AuthorImg";
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";

export default function ContentBlockV3({ ...props }) {
  return (
    <Box marginTop={12} width={"100%"} display={"flex"}>
      <Box width={"100%"} display={"flex"}>
        <Box
          width={"55%"}
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
            <Typography color={theme.palette.items.main}>
              {props.text}
            </Typography>
            <Box sx={{ width: "100%", textAlign: "end" }}>
              <Particle color={theme.palette.particle1} />
              <Particle color={theme.palette.particle2} />
            </Box>
          </Box>
        </Box>
        <Box
          width={"45%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box sx={{ display: "flex" }}>
              <AuthorImg width={"80px"} img={person1}></AuthorImg>
              <AuthorImg width={"80px"} img={person2}></AuthorImg>
              <AuthorImg width={"80px"} img={person3}></AuthorImg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
