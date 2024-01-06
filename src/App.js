import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/css/style.css"
import Header from "./components/organisms/Header";

import AppRouter from "./routing/AppRouter"

function App() {


  return (
    <div className="App">
      <AppRouter />
    </div>

    
  );
}

export default App;
