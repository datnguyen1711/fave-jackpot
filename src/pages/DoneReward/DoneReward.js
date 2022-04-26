import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DoneReward.scss";
import checked from "../../assets/images/icons/checked.svg";
import bgCard from "../../assets/images/main/bg-card.svg";
import Context from "../../store/Context";

const DoneReward = () => {
  const [value, setValue] = useState(null);
  const [state, dispatch] = useContext(Context);
  const handleValueForm = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="doneReward">
      <div className="doneReward-header">
        <span>Correct answer!</span>
        <div className="doneReward-info">
          <div className="doneReward-info-bot">
            <div className="doneReward-info-main">
              <img src={checked} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="doneReward-question">
        <div className="doneReward-question-main">
          <h2>Cashback credited!</h2>
        </div>
        <div className="doneReward-question-card">
          <div className="doneReward-question-image">
            <span>₹{state.data}</span>
          </div>
        </div>
        <p className="doneReward-question-desc">
          will reflect in your bank (ICICI xxxx10011) shortly
        </p>
      </div>
      <div className="doneReward-handle">
        <button
          style={{
            backgroundColor: "transparent",
            border: "2px solid #000",
            color: "#000",
          }}
        >
          View rewards
        </button>
        <button>Back to home</button>
      </div>
    </div>
  );
};

export default DoneReward;
