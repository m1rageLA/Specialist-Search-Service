import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../assets/theme";
import AuthorImg from "../../ui/AuthorImg";
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
import Indicator from "../../ui/Indicator";
import LikeButton from "../../ui/LikeButton";

export default function Card({ ...props }) {
  return (
    <Box
      sx={{
        backgroundColor: theme.box.variant1,
        display: "grid",
        height: "180px",
        gridTemplateColumns: "0.30fr 0.8fr 0.25fr",
        gridTemplateRows: "1fr 0.2fr",
      }}
    >
      <Box gridColumn={"1"} sx={{ display: "flex", marginLeft: "10px" }}>
        <div style={{ display: "flex", height: "50%" }}>
          <AuthorImg img={person1}></AuthorImg>
          <AuthorImg img={person2}></AuthorImg>
          <AuthorImg img={person3}></AuthorImg>
          <Typography
            sx={{
              color: theme.palette.logo,
              alignSelf: "center",
              marginLeft: "8px",
              fontSize: "14px",
            }}
          >
            +2
          </Typography>
        </div>
      </Box>
      <Box sx={{ gridRow: "2" }}>
        <Typography
          sx={{ marginTop: "30px", gridRow: "2" }}
          variant="h6"
          color={theme.palette.items.main}
          fontSize={"12px"}
          fontFamily={"light"}
        >
          Updated 15.01.2024
        </Typography>
      </Box>
      <Box gridColumn={"2"}>
        <Typography
          sx={{ marginBottom: "5px" }}
          color={theme.palette.itemsLight}
          variant="h6"
        >
          {props.title}
        </Typography>

        <Typography color={theme.palette.items.main}>{props.text}</Typography>
        <Box sx={{ display: "flex" }} mt={3}>
          <Indicator variant="hard" text={"Js"} />
          <Indicator variant="medium" text={"Python"} />
          <Indicator variant="easy" text={"SQL"} />
        </Box>
      </Box>

      <Box gridColumn={"3"} textAlign="center">
        <LikeButton />
      </Box>
    </Box>
  );
}
