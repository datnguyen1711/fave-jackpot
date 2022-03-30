import React from "react";
const Card = ({ card, flipped, indexs }) => {
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
        <img src={card.cardSrc} alt="" className="front" />
      </div>
    </div>
  );
};
export default Card;
