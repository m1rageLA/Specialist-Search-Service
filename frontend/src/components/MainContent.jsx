import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logoImg from "../assets/images/logo.png";
import ImageTextV1 from "./blocks/ImageTextV1";
import ExampleCard from "./blocks/ExampleCard";
import ContentBlockV1 from "./blocks/ContentBlockV1";
import ContentBlockV2 from "./blocks/ContentBlockV2";
import ContentBlockV3 from "./blocks/ContentBlockV3";

const MainContent = () => {
  return (
    <Container maxWidth="md">
      <ContentBlockV1
        preHeader={`Developers Community:`}
        header={`Developers Community:`}
        title={`Developers Community:`}
        text={`
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet 
          sapien fringilla, mattis ligula consectetur, ultrices mauris.
          Maecenas vitae mattis tellus. Nullam quis imperdiet augue.`}
        img={logoImg}
        alt={"logo"}
      />
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
      <ExampleCard
        header={`Example of card`}
        title={`Developers Community:`}
        text={`
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
          massa mi. Aliquam in hendrerit urna.`}
      />
      <ContentBlockV2
        title={`Team`}
        text={`
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
         Aliquam in hendrerit urna. Pellentesque sit
        `}
        img={logoImg}
        alt={"logo"}
      />
      <ContentBlockV3
        title={`Skill`}
        text={`
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
         Aliquam in hendrerit urna. Pellentesque sit
        `}
        img={logoImg}
        alt={"logo"}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
};

export default MainContent;
