import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ClaimReward.scss";
import Modal from "../../components/Modal/Modal";
import { useBeforeunload } from "react-beforeunload";

const ClaimReward = () => {
  const [checkbox, setCheckbox] = useState("");
  const [value, setValue] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleValueForm = (e) => {
    setCheckbox(e.target.value);
  };
  const handleSubmitQuestion = () => {
    setValue(checkbox);
    if (checkbox === "pink") {
      navigate("/done-confirm", {
        state: { numberReward: state.numberReward },
      });
    }
  };

  // useBeforeunload((event) => {
  //   if (checkbox !== "pink") {
  //     event.preventDefault();
  //     const nativeAlert = window.alert;
  //     window.alert = console.log; // Temporarily override the alert function
  //     setValue(true);
  //     window.alert = nativeAlert; // Restore it to default
  //   }
  // });

  const handleClick = () => {
    setValue(null);
    setCheckbox("");
    document.getElementById("blue").checked = false;
    document.getElementById("yellow").checked = false;
    document.getElementById("green").checked = false;
  };
  return (
    <div className="claimReward">
      {value && value !== "pink" ? (
        <Modal
          title={"Incorrect answer"}
          content={
            "Come back on Friday to play again. Keep paying with Fave to win more."
          }
          handleClick={handleClick}
          onExit={false}
        />
      ) : (
        <></>
      )}
      <div className="claimReward-header">
        <span>Claim your reward</span>
        <div className="claimReward-info">
          <div className="claimReward-info-bot">
            <div className="claimReward-info-main">
              <div className="claimReward-info-title">
                <h3>YOU’VE WON</h3>
              </div>
              <h2>₹ {state.numberReward} cashback </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="claimReward-question">
        <div className="claimReward-question-top">
          <h3>Pick the right answer to claim your reward</h3>
        </div>
        <div className="claimReward-line"></div>
        <div className="claimReward-question-main">
          <h2>What color is the Fave logo?</h2>
          <div className="claimReward-question-list">
            <div className="claimReward-question-item">
              <div className="claimReward-question-radio">
                <input
                  type="radio"
                  id="blue"
                  value="blue"
                  className="radio-input"
                  name="gender"
                  onClick={handleValueForm}
                />
                <label htmlFor="blue" className="radio-label"></label>
              </div>
              <span>Blue</span>
            </div>
            <div className="claimReward-question-item">
              <div className="claimReward-question-radio">
                <input
                  type="radio"
                  id="pink"
                  value="pink"
                  className="radio-input"
                  name="gender"
                  onClick={handleValueForm}
                />
                <label htmlFor="pink" className="radio-label"></label>
              </div>
              <span>Pink</span>
            </div>
            <div className="claimReward-question-item">
              <div className="claimReward-question-radio">
                <input
                  type="radio"
                  id="yellow"
                  value="yellow"
                  className="radio-input"
                  name="gender"
                  onClick={handleValueForm}
                />
                <label htmlFor="yellow" className="radio-label"></label>
              </div>
              <span>Yellow</span>
            </div>
            <div className="claimReward-question-item">
              <div className="claimReward-question-radio">
                <input
                  type="radio"
                  id="green"
                  value="green"
                  className="radio-input"
                  name="gender"
                  onClick={handleValueForm}
                />
                <label htmlFor="green" className="radio-label"></label>
              </div>
              <span>Green</span>
            </div>
          </div>
        </div>
      </div>
      <div className="claimReward-handle">
        <button
          className={`claimReward-button ${checkbox === "" ? "disable" : ""}`}
          onClick={handleSubmitQuestion}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ClaimReward;
