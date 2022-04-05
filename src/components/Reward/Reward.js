import React from "react";
import "../Reward/Reward.scss";
import reward from "../../assets/images/main/reward1.svg";
import wheel from "../../assets/images/main/wheel.png";

const Reward = ({ visible }) => {
  return (
    <div className={`reward-info`}>
      <div className={`reward-info-top ${visible ? "" : "visible"}`}>
        <div className="reward-info-top-image">
          <img src={wheel} alt="" className="reward-info-top-image-1" />
          <img src={reward} alt="" className="reward-info-top-image-2" />
        </div>
      </div>
      <div className={`reward-info-bot ${visible ? "" : "visible"}`}>
        <div className="reward-info-main">
          <div className="reward-info-title">
            <h3>WEEKLY JACKPOT</h3>
          </div>
          <h2>₹ 5,000 cashback </h2>
          <p>directly in your bank</p>
        </div>
      </div>
    </div>
  );
};

export default Reward;
