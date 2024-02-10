import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../assets/theme";
import Card from "../common/Card";

export default function ExampleCard({ ...props }) {
  return (
    <Box marginTop={12} width={"100%"} display={"flex"}>
      <Box width={"100%"} display={"flex"}>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Typography
            sx={{ marginBottom: "15px" }}
            variant="h5"
            color={theme.palette.itemsLight}
          >
            {props.header}
          </Typography>
          <Card
            authorsImg={[]}
            title={props.title}
            text={props.text}
            hardSkills={["Python"]}
            mediumSkills={["Js"]}
            easySkills={["SQL"]}
          ></Card>
          {/* <Box sx={{ backgroundColor: theme.box.variant1, height: "200px" }}>
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
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
