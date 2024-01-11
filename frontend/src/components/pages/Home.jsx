import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Home = () => {

  const getUsername = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {  
        console.log("УСПЕХ");
        const data = await response.json();
        console.log(data.username);
      }
    } catch (error) {
      
    }
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Box>
        <Button
          sx={{
            width: "300px",
          }}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default Home;
