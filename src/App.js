import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import MiniGame from "./pages/MiniGame/MiniGame";
import Loveletter from "./pages/Loveletter/Loveletter";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/aboutus">Our Story</Link>
        <Link to="/minigame">Mini Game</Link>
        <Link to="/loveletter">Love Letter</Link>
      </nav>

      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/minigame" element={<MiniGame />} />
        <Route path="/loveletter" element={<Loveletter />} />
      </Routes>
    </Router>
  );
}

export default App;
