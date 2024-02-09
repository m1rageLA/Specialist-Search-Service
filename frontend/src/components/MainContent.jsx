import { Box, Container, Typography } from "@mui/material";
import React from "react";
import theme from "../assets/theme";
import logoImg from "../assets/images/logo.png";
import Particle from "../ui/Particle";

const MainContent = () => {
  return (
    <Container maxWidth="md">
      <Box marginTop={12} width={"100%"} height={320} display={"flex"}>
        <Box
          width={"100%"}
          display={"flex"}
        >
          <Box width={"70%"} sx={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
            <Typography fontSize={"15px"} color={theme.palette.items.main} variant="h6">Developers Community: </Typography>
            <Typography sx={{marginBottom: "15px"}} variant="h5" color={theme.palette.itemsLight}>Find Like-minded Individuals!</Typography>
            <Box sx={{ backgroundColor: theme.box.variant1 }}>
              <Typography sx={{marginBottom: "15px"}} color={theme.palette.itemsLight}>Developers Community: </Typography>
              <Typography color={theme.palette.items.main}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              </Typography>
              <Particle color={theme.palette.particle1}/>
              <Particle color={theme.palette.particle2}/>
              <Particle color={theme.palette.particle3}/>
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
              src={logoImg}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainContent;
