import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      // Обработка успешной регистрации, например, перенаправление на страницу входа
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      // Обработка ошибки, например, вывод сообщения об ошибке на экран
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

export default SignUp;
