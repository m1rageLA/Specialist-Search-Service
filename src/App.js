import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/css/style.css"

import Header from "./components/organisms/Header";
import * as Pages from "./components/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header pages={['Products', 'Pricing', 'Blog']}/>

        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/SignUpPage" element={<Pages.SignUpPage />} />
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;
