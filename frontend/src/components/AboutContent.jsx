import React from "react";
import { Box, Container, Typography } from "@mui/material";
import theme from "../assets/theme";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import author from "../assets/images/author.jpg";
import AuthorImg from "../ui/AuthorImg";
import GrayBox from "../ui/GrayBox";
import ContentBlockV1 from "./blocks/ContentBlockV1";
import ImageTextV1 from "./blocks/ImageTextV1";

function LightText(props) {
  return (
    <Typography color={theme.palette.itemsLight} letterSpacing={6}>
      {props.children}
    </Typography>
  );
}

function DescriptionText(props) {
  return (
    <Typography
      color={theme.palette.items.main}
      letterSpacing={2}
      fontSize={12}
    >
      {props.children}
    </Typography>
  );
}

export default function AboutContent() {
  return (
    <Container maxWidth="md">
      <Box
        mt={12}
        color={theme.palette.items.main}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography fontSize={32} color={theme.palette.itemsLight}>
          About Us
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
        </Typography>

        <Box mt={8} sx={{ display: "flex", flexDirection: "row" }}>
          <Box marginRight={10} textAlign={"center"}>
            <LightText>2000+ hours</LightText>
            <DescriptionText>Hours at work</DescriptionText>
          </Box>
          <Box marginRight={10} textAlign={"center"}>
            <LightText>10</LightText>
            <DescriptionText>Developers</DescriptionText>
          </Box>
          <Box textAlign={"center"}>
            <LightText>100000</LightText>
            <DescriptionText>Lines of code</DescriptionText>
          </Box>
        </Box>

        <Box
          mt={8}
          padding={3.5}
          display={"flex"}
          boxShadow="0px 0px 1px 1px rgba(255, 255, 255, 1)"
        >
          <Typography>Follow us on</Typography>
          <Box ml={4}>
            <GitHubIcon sx={{ marginRight: "6px" }} />
            <XIcon sx={{ marginRight: "6px" }} />
            <FacebookIcon sx={{ marginRight: "6px" }} />
            <LinkedInIcon sx={{ marginRight: "6px" }} />
          </Box>
        </Box>

        <Box mt={10} display={"flex"}>
          <Box
            display={"flex"}
            borderRadius={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            marginRight={"100px"}
          >
            <AuthorImg img={author} width={"150px"} />
          </Box>

          <GrayBox width={"350px"}>
            <Typography var="header">Developers Community: </Typography>
            <Typography var="text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla
            </Typography>
          </GrayBox>
        </Box>
        <Box>
        <ImageTextV1
        header={`Find Like-minded Individuals!`}
        title={`Developers Community:`}
        text={`
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
          massa mi.dsadsdsaadsdsadsadsaaaaaaaaaaaaaa Aliquam in hendrerit urna. Pellentesque sit amet 
          sapien fringilla, mattis ligula`}
        secondText={`Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
         Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula 
         consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
        `}
        alt={"logo"}
      />
        </Box>
      </Box>
    </Container>
  );
}
