import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Main = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const end = new Date(decodedToken.exp * 1000);
        const start = new Date(decodedToken.iat * 1000);

        console.log("Token expires at (exp):", end.toUTCString());
        console.log("Token created in (iat):", start.toUTCString());
        // Делайте что-то с расшифрованными данными
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("Токен отсутствует.");
    }
  }, []);

  return (
<div>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  <button>123</button>
  
  </div>

    
  );
};

export default Main;
