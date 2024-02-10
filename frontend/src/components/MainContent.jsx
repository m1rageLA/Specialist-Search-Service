import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logoImg from "../assets/images/logo.png";
import TextImageV1 from "./blocks/TextImageV1";
import ImageTextV1 from "./blocks/ImageTextV1";
import ExampleCard from "./blocks/ExampleCard";

const MainContent = () => {
  return (
    <Container maxWidth="md">
      <TextImageV1
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
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet 
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
