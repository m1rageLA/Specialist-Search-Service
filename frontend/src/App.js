import React from "react";
import "./assets/styles/css/style.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Regestration from "./pages/Regestration";
import Main from "./pages/Main";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<Regestration />} />
          <Route path="/Main" element={<Main />} />
          

          {/* <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/Main" element={<Main />} />  */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
