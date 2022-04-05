import React from "react";
import tileColor from "../../assets/images/cards/tile-color.svg";
import rewardLucky from "../../assets/images/cards/reward-lucky.svg";
import "./CardWinner.scss";
const CardWinner = ({ numberReward }) => {
  return (
    <div className="cardReward">
      <div className="cardReward-top">
        <img
          src={numberReward !== "noReward" ? tileColor : rewardLucky}
          alt=""
        />
      </div>
      <div className="cardReward-main">
        {numberReward !== "noReward" ? (
          <>
            {" "}
            <h3>{numberReward}</h3>
            <span className="cardReward-main-normal">cashback</span>
          </>
        ) : (
          <div className="cardReward-main-lucky">
            <span>Better luck next time</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardWinner;
