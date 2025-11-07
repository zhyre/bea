import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">For My Baby Bea</h1>
      <div className="card-container">
        <Link to="/aboutus" className="card">
          <h2>📖 Our Story</h2>
          <p>Relive our sweetest memories together.</p>
        </Link>

        <Link to="/minigame" className="card">
          <h2>🎮 Mini Game</h2>
          <p>Play a fun little game with me!</p>
        </Link>

        <Link to="/loveletter" className="card">
          <h2>💌 Letter</h2>
          <p>A message straight from my heart.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;