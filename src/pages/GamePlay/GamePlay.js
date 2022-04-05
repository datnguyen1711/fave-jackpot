import React, { useState, useEffect, useRef } from "react";
import "./GamePlay.scss";
import btnClose from "../../assets/images/main/close-button.png";
import faveTittle from "../../assets/images/main/fave-title.svg";
import Reward from "../../components/Reward/Reward";
import hiddenCard from "../../assets/images/cards/hiddenCard.svg";
import movingCard from "../../assets/images/cards/movingCard1.svg";
import titleWon from "../../assets/images/main/rewardWon-title.svg";
import noRewardTitle from "../../assets/images/main/noReward-title.svg";
import wheel from "../../assets/images/main/wheel.svg";
import jackpot from "../../assets/images/main/jackpot.png";
import CardWinner from "../../components/CardWinner/CardWinner";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import CardMini from "../../components/CardMini/CardMini";
import otherRewardSound from "../../assets/audio/otherRewards.wav";
import luckySound from "../../assets/audio/betterLuck.wav";
import jackpotSound from "../../assets/audio/jackpot.wav";

const GamePlay = () => {
  const increment = useRef(null);
  const currentIndex = useRef(-1);
  const [flipped, setFlipped] = useState(false);
  const [indexs, setIndexs] = useState(0);
  const [numberReward, setNumberReward] = useState(undefined);
  const [visible, setVisible] = useState(true);
  const [isConfetti, setIsConfetti] = useState(false);
  const [otherSound] = useState(new Audio(otherRewardSound));
  const [jackpotSounds] = useState(new Audio(jackpotSound));
  const [luckySounds] = useState(new Audio(luckySound));
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState([
    {
      id: 1,
      number: "50",
      value: "50",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 2,
      number: "100",
      value: "100",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 3,
      number: "1,000",
      value: "1,000",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 4,
      number: "noReward",
      value: "?",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 5,
      number: "50",
      value: "50",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 6,
      number: "500",
      value: "500",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 7,
      number: "5,000",
      value: "5,000",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 8,
      number: "50",
      value: "50",
      hiddenCard: hiddenCard,
      visible: true,
    },
    {
      id: 9,
      number: "noReward",
      value: "?",
      hiddenCard: hiddenCard,
      visible: true,
    },
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
    setTimeout(() => {
      startPlayToWin();
    }, 3000);
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
    }, 150);
  };
  const handleStopGame = () => {
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
    setNumberReward(state.find((item) => item.visible === true).number);
    setVisible(false);
    playSound(state.find((item) => item.visible === true).number);
    showReward();
    showConfetti();
  };
  const handleClaimReward = () => {
    navigate("/confirm", { state: { numberReward: numberReward } });
  };
  const showReward = () => {
    const getRe = setTimeout(() => {
      document.getElementById("main_place").innerHTML =
        document.getElementById("cardReward").innerHTML;
      document.getElementById("main_top").innerHTML =
        document.getElementById("rewardWonTitle").innerHTML;
      document.getElementById("add-content").innerHTML =
        document.getElementById("content").innerHTML;
    }, 2500);

    return () => clearTimeout(getRe);
  };
  const showConfetti = () => {
    const showCon = setTimeout(() => {
      setIsConfetti(true);
    }, 3000);
    return () => clearTimeout(showCon);
  };
  const playSound = (value) => {
    const playingSound = setTimeout(() => {
      value === "5,000"
        ? jackpotSounds.play()
        : value === "noReward"
        ? luckySounds.play()
        : otherSound.play();
    }, 3000);
    return () => clearTimeout(playingSound);
  };
  return (
    <div className="main">
      {isConfetti && numberReward === "5,000" ? (
        <div>
          <Confetti
            width={window.outerWidth}
            height={window.outerHeight}
            numberOfPieces={"1500"}
            confettiSource={{
              w: 10,
              h: 10,
              x: 0,
              y: 300,
            }}
            recycle={false}
          />
          <Confetti
            width={window.outerWidth}
            height={window.outerHeight}
            numberOfPieces={"1500"}
            confettiSource={{
              w: 10,
              h: 10,
              x: window.outerWidth,
              y: 300,
            }}
            recycle={false}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="gamePlay">
        <div className={`gamePlay-top`} id="main_top">
          <div className={`header ${visible ? "" : "visible"}`}>
            <div className={`header-close`}>
              <img src={btnClose} alt="" />
            </div>
            <div className={`header-title`}>
              <img src={faveTittle} alt="" />
            </div>
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
          <div className="gamePlay-cardGrid" id="main_place">
            {state.map((card) => (
              <CardMini card={card} flipped={flipped} indexs={indexs} />
            ))}
          </div>
        </div>
        <div className="content" id="add-content"></div>
        <div
          className={`button-click ${
            numberReward === "noReward"
              ? " button-click-double"
              : " button-click-single"
          }`}
          id="button-click"
        >
          {numberReward === "noReward" ? (
            <button
              className={`${numberReward ? "invisible" : ""}`}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #fff",
              }}
            >
              View rewards
            </button>
          ) : (
            false
          )}
          <button
            onClick={
              flipped
                ? numberReward
                  ? handleClaimReward
                  : handleStopGame
                : handlePlayGame
            }
            disabled={flipped && currentIndex.current === -1}
            className={`${numberReward ? "invisible" : ""}`}
          >
            {flipped
              ? numberReward
                ? numberReward === "noReward"
                  ? "Back to home"
                  : "Claim Reward"
                : "Stop"
              : "Play"}
          </button>
        </div>
      </div>
      <div id="cardReward" style={{ display: "none" }}>
        <CardWinner numberReward={numberReward} />
      </div>
      <div id="rewardWonTitle" style={{ display: "none" }}>
        <div className="rewardWonTitle">
          {numberReward !== "noReward" ? (
            <>
              <img src={wheel} alt="" className="rewardWonTitle-img1" />
            </>
          ) : (
            <></>
          )}
          <img
            src={
              numberReward === "5,000"
                ? jackpot
                : numberReward === "noReward"
                ? noRewardTitle
                : titleWon
            }
            alt=""
            className={`rewardWonTitle-img2 ${
              numberReward === "5,000"
                ? "jackpot-title"
                : numberReward === "noReward"
                ? "noReward-title"
                : ""
            }`}
          />
        </div>
      </div>
      <div id="content" style={{ display: "none" }}>
        <h1
          className={`content-add ${
            numberReward !== "noReward" ? "" : "small"
          }`}
        >
          {numberReward !== "noReward" ? (
            <>Claim this reward to get it in your bank account.</>
          ) : (
            <>Keep paying with Fave to play again</>
          )}
        </h1>
      </div>
    </div>
  );
};
export default GamePlay;
