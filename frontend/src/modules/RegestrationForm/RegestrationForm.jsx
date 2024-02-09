import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import regestrationApi from "./api/regestrationApi";
import theme from "../../assets/theme";
import { Box, Container, Typography } from "@mui/material";

const RegestrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    const { success, data, error } = await regestrationApi(e, formData);

    if (success) {
      console.log(data);
    } else {
      console.error(error);
      console.log("0------");
    }
  };
  return (
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
        sx={(theme) => ({
          ...theme.box.variant1,
        })}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegistration();
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Typography
            sx={{
              textAlign: "center",
              margin: "0 0 40px 0",
            }}
            variant="h5"
            color="color"
          >
            Sign Up
          </Typography>
        </div>
        <div>
          <TextField
            sx={(theme) => ({
              ...theme.textField.variant1,
            })}
            id="filled-basic"
            label="user name"
            variant="filled"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
          />
        </div>
        <div>
          <TextField
            sx={(theme) => ({
              ...theme.textField.variant1,
            })}
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
            sx={(theme) => ({
              ...theme.textField.variant1,
            })}
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
          sx={(theme) => ({
            ...theme.button.variant1,
            width: "300px",
          })}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default RegestrationForm;
