import { Button } from "@mui/material";
import React from "react";
import StarBorderTwoToneIcon from "@mui/icons-material/StarBorderTwoTone";
import theme from "../assets/theme";

export default function LikeButton() {
  return (
    <Button
      sx={{ backgroundColor: theme.palette.tertiary, color: theme.palette.items.main, fontSize: "12px"}}
      variant="contained"
      startIcon={<StarBorderTwoToneIcon />}
    >
      Save
    </Button>
  );
}
