import React from "react";
import tileColor from "../../assets/images/cards/tile-color.svg";
import tileWhite from "../../assets/images/cards/tile-white.svg";
import "./CardMini.scss";

const CardMini = ({ card, flipped, indexs }) => {
  return (
    <div
      className={`gamePlay-cardItem ${card.visible ? "" : "visible"} ${
        card.scale ? `scaled${indexs}` : ""
      }`}
      key={card.id}
    >
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.hiddenCard}
          style={{ width: "80px" }}
          alt=""
          className="back"
        />
        <div className="cardMini front">
          <div className="cardMini-top">
            <img src={card.value !== "5,000" ? tileWhite : tileColor} alt="" />
          </div>
          <div className="cardMini-main">
            <h3
              className={`${card.value !== "5,000" ? "jackpot" : "jackpot1"}`}
            >
              {card.value}
            </h3>
            <div
              className={`cardMini-line ${
                card.value !== "5,000" ? "" : "color"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
