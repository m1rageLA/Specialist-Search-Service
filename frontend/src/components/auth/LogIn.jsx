import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';

import "../theme/css/theme.css";
const theme = createTheme();

const LogIn = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        
        console.log("Авторизация успешна", data.token);
        navigate("/Main");
      } else {
        const data = await response.json();
        console.error(data.error);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса на авторизацию", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
      </div>
    </ThemeProvider>
  );
};

export default LogIn;
