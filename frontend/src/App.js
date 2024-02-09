import React from "react";
import "./assets/styles/css/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Regestration from "./pages/Regestration";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<Regestration />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
