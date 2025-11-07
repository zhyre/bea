import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import MiniGame from "./pages/MiniGame/MiniGame";
import Loveletter from "./pages/Loveletter/Loveletter";
import Home from "./pages/Homepage/Homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/minigame" element={<MiniGame />} />
        <Route path="/loveletter" element={<Loveletter />} />
      </Routes>
    </Router>
  );
}

export default App;
