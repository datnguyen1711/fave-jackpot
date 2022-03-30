import React, { useState, useEffect, useRef } from "react";
import "./GamePlay.scss";
import btnClose from "../../assets/images/main/close-button.png";
import faveTittle from "../../assets/images/main/fave-title.svg";
import Reward from "../../components/Reward/Reward";
import card50 from "../../assets/images/cards/50Tile.svg";
import card100 from "../../assets/images/cards/100Tile.svg";
import card500 from "../../assets/images/cards/500Tile.svg";
import card1000 from "../../assets/images/cards/1000Tile.svg";
import card5000 from "../../assets/images/cards/5000Tile.svg";
import cardNo from "../../assets/images/cards/noReward.svg";
import Card from "../../components/Card/Card";
import hiddenCard from "../../assets/images/cards/hiddenCard.svg";
import movingCard from "../../assets/images/cards/movingCard1.svg";
const GamePlay = () => {
  const increment = useRef(null);
  const currentIndex = useRef(-1);
  const [flipped, setFlipped] = useState(false);
  const [indexs, setIndexs] = useState(0);
  const [visible, setVisible] = useState(true);
  const [state, setState] = useState([
    { id: 1, cardSrc: card50, hiddenCard: hiddenCard, visible: true },
    { id: 2, cardSrc: card100, hiddenCard: hiddenCard, visible: true },
    { id: 3, cardSrc: card1000, hiddenCard: hiddenCard, visible: true },
    { id: 4, cardSrc: cardNo, hiddenCard: hiddenCard, visible: true },
    { id: 5, cardSrc: card50, hiddenCard: hiddenCard, visible: true },
    { id: 6, cardSrc: card500, hiddenCard: hiddenCard, visible: true },
    {
      id: 7,
      cardSrc: card5000,
      hiddenCard: hiddenCard,
      visible: true,
    },
    { id: 8, cardSrc: card50, hiddenCard: hiddenCard, visible: true },
    { id: 9, cardSrc: cardNo, hiddenCard: hiddenCard, visible: true },
  ]);
  const startAutoRearrange = () => {
    increment.current = setInterval(() => {
      let updateStateRandom = state
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setState(updateStateRandom);
    }, 1000);
  };

  // Initial
  useEffect(() => {
    startAutoRearrange();
  }, []);
  const handlePlayGame = () => {
    clearInterval(increment.current);
    setFlipped(true);
    startPlayToWin();
  };
  const randomGame = () => {
    const randomIndex = Math.floor(Math.random() * state.length);
    if (currentIndex.current !== randomIndex) {
      let updateState = state;
      if (currentIndex.current !== -1) {
        updateState[currentIndex.current].hiddenCard = hiddenCard;
      }
      updateState[randomIndex].hiddenCard = movingCard;
      setState([...updateState]);
      currentIndex.current = randomIndex;
    } else {
      return randomGame();
    }
  };
  const startPlayToWin = () => {
    increment.current = setInterval(() => {
      randomGame();
    }, 300);
  };
  const HandleStopGame = () => {
    clearInterval(increment.current);
    let updateState = state;
    updateState = updateState.map((item, index) => {
      if (index !== currentIndex.current) {
        item.visible = false;
      } else {
        item.scale = true;
      }
      return item;
    });
    setState(updateState);
    setIndexs(state.map((item) => item.visible === true).indexOf(true) + 1);
    setVisible(false);
  };

  return (
    <div className="main">
      <div className="gamePlay">
        <div className={`gamePlay-top ${visible ? "" : "visible"}`}>
          <div className="header">
            <div className={`header-close`}>
              <img src={btnClose} alt="" />
            </div>
            <div className={`header-title`}>
              <img src={faveTittle} alt="" />
            </div>
            <div className="div"></div>
          </div>
          <Reward visible={visible} />
        </div>
        <div className="gamePlay-main">
          <div className={`gamePlay-main-title ${visible ? "" : "visible"}`}>
            <div className="line"></div>
            <div className="title">
              {flipped ? "STOP TO REVEAL REWARD" : "PLAY TO WIN"}
            </div>
          </div>
          <div className="gamePlay-cardGrid">
            {state.map((card) => (
              <Card card={card} flipped={flipped} indexs={indexs} />
            ))}
          </div>
        </div>
        <div className="button-click">
          <button
            onClick={flipped ? HandleStopGame : handlePlayGame}
            disabled={flipped && currentIndex.current === -1}
          >
            {flipped ? "Stop" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default GamePlay;
