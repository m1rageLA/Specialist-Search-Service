import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const HomeContent = () => {
  return (
      <div>
        <Box>
          <Button
            sx={{
              width: "300px",
            }}  
            variant="contained"
            type="submit"
          >
            LOX
          </Button>
        </Box>
      </div>
  );
};

export default HomeContent;
