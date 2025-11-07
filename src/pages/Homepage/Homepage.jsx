import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Home() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleYes = () => {
    setStep(2); // move to nickname question
  };

  const handleNo = () => {
    setMessage("Go awayyyyy!! Only my baby can enter!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === "tamtam") {
      navigate("/loveletter");
    } else {
      setMessage("Wrongg! only my baby knows itt !");
    }
  };

  return (
    <div className="home-container">
      <div className="profile-circle">
        <img src={`${process.env.PUBLIC_URL}/assets/IMG_2453.jpg`} alt="My Baby Bea" className="profile-image" />
      </div>

      {step === 1 && (
        <>
          <h1 className="question-text">Are you my babyyy? </h1>

          <div className="button-group">
            <button className="yes-button" onClick={handleYes}>Yesss, i'm ur babyyy</button>
            <button className="no-button" onClick={handleNo}>Naur</button>
          </div>
        </>
      )}

      {step === 2 && (
        <form className="nickname-form" onSubmit={handleSubmit}>
          <h2 className="question-text">What’s your favorite nickname of me man bii?</h2>
          <input
            type="text"
            className="nickname-input"
            placeholder="Type here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button type="submit" className="yes-button">
            Submit
          </button>
        </form>
      )}

      {message && <p className="no-message">{message}</p>}
    </div>
  );
}

export default Home;
