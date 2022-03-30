import React, { useState } from "react";
import "./ClaimReward.scss";

const ClaimReward = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  const handleValueForm = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="claimReward">
      <div className="claimReward-header">
        <span>Claim your reward</span>
        <div className="claimReward-info">
          <div className="claimReward-info-bot">
            <div className="claimReward-info-main">
              <div className="claimReward-info-title">
                <h3>YOU’VE WON</h3>
              </div>
              <h2>₹ 50 cashback </h2>
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
          className={`claimReward-button ${value === null ? "disable" : ""}`}
          onClick={() => {
            console.log("hihi");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ClaimReward;
