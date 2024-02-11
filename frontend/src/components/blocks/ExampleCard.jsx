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
        </Box>
      </Box>
    </Box>
  );
}
