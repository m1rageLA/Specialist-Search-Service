import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import "../../components/theme/css/theme.css";
import logInApi from "./api/logInApi";

const theme = createTheme();

const LogInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { success, token, error } = await logInApi(formData);

    if (success) {
      localStorage.setItem("token", token);
      console.log(`Login successsful, your token is \n${token}`);
      navigate("/Main");
    } else {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
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
              value={formData.email}
              onChange={handleInputChange}
              name="email"
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
              value={formData.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <Button
            sx={{
              width: "300px",
            }}
            variant="contained"
            type="submit"
          >
            Log In
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogInForm;
