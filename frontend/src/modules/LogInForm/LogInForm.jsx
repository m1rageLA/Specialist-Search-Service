import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import logInApi from "./api/logInApi";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import "../../assets/styles/css/style.css";
import theme from "../../assets/theme";

const LogInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
          handleLogin();
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
            Log in
          </Typography>
        </div>

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
        <Box sx={{ display: "flex", alignSelf: "center", margin: "10px 0 10px 0"}}>
          <Checkbox
            sx={(theme) => ({
              ...theme.checkbox.variant1,
              alignSelf: "center"
            })}
            checked={checked}
            onChange={handleChange}
            color="items"
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography
            sx={{
              display: "inline-block",
              marginLeft: "5px",
              color: theme.palette.items.main
            }}
          >
            remember me
          </Typography>
        </Box>
        <Button
          sx={(theme) => ({
            ...theme.button.variant1,
            width: "300px"
          })}
          variant="contained"
          type="submit"
          color="secondary"
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default LogInForm;
