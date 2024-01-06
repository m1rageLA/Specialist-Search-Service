import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LogIn = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Обрати внимание на исправленный параметр
          bgcolor: "#f2f2f2",
          height: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            sx={{
              width: "300px",
              marginBottom: "10px",
            }}
            id="filled-basic"
            label="e-mail"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            sx={{
              width: "300px",
              marginBottom: "20px",
            }}
            id="filled-basic"
            label="password"
            variant="filled"
            type="password"
          />
        </div>
        <Button
          sx={{
            width: "300px",
          }}
          variant="contained"
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};

export default LogIn;
