import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import regestrationApi from "./api/regestrationApi";

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
    } 
    else {
      console.error(error);
      console.log("0------");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleRegistration}
        style={{
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
            label="user name"
            variant="filled"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
          />
        </div>
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegestrationForm;
