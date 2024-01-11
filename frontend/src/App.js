import React from "react";
import Header from "./components/common/Header";
import "./assets/styles/css/style.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/Main" element={<Main />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
