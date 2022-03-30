import React from "react";
import "./PreGame.scss";
import btnClose from "../../assets/images/main/close-button.png";
import faveTittle from "../../assets/images/main/fave-title.svg";
import phoneIcon from "../../assets/images/icons/phone.png";
import rewardIcon from "../../assets/images/icons/reward.png";
import tickIcon from "../../assets/images/icons/tick.png";
import Reward from "../../components/Reward/Reward";

const PreGame = () => {
  return (
    <div className="main">
      <div className="reward">
        <div className="reward-main">
          <div className="header">
            <div className="header-close">
              <img src={btnClose} alt="" />
            </div>
            <div className="header-title">
              <img src={faveTittle} alt="" />
            </div>
            <div className="div"></div>
          </div>
          <ul className="reward-list">
            <li className="reward-item">
              <div className="reward-button">
                <img src={phoneIcon} alt="" />
              </div>
              <div className="reward-name">Pay using Fave</div>
            </li>
            <li className="reward-item">
              <div className="reward-button">
                <img src={rewardIcon} alt="" />
              </div>
              <div className="reward-name">Play to win rewards</div>
            </li>
            <li className="reward-item">
              <div className="reward-button">
                <img src={tickIcon} alt="" />
              </div>
              <div className="reward-name">Claim and use</div>
            </li>
          </ul>
          <Reward />
        </div>
      </div>
      <div className="other">
        <div className="other-main">
          <div className="other-title">Other rewards</div>
          <ul className="other-list">
            <div className="other-item">
              <div className="other-currency">1,000</div>
              <div className="other-info">
                <div className="other-info-name">₹ 1,000 cashback </div>
                <div className="other-info-desc">4 people won so far</div>
              </div>
            </div>
            <div className="other-item">
              <div className="other-currency">500</div>
              <div className="other-info">
                <div className="other-info-name">₹ 500 cashback </div>
                <div className="other-info-desc">12 people won so far</div>
              </div>
            </div>
            <div className="other-item">
              <div className="other-currency">100</div>
              <div className="other-info">
                <div className="other-info-name">₹ 100 cashback </div>
                <div className="other-info-desc">120 people won so far</div>
              </div>
            </div>
            <div className="other-item">
              <div className="other-currency">500</div>
              <div className="other-info">
                <div className="other-info-name">₹ 50 cashback </div>
                <div className="other-info-desc">4,120 people won so far</div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="works">
        <div className="works-main">
          <div className="works-title">How it works</div>
          <div className="works-line"></div>
          <ul className="works-list">
            <div className="works-item">
              <div className="works-number">1</div>
              <div className="works-info">
                <div className="works-info-name">Pay using Fave</div>
                <div className="works-info-desc">
                  At stores listed on using Fave UPI
                </div>
              </div>
            </div>
            <div className="works-item">
              <div className="works-number">2</div>
              <div className="works-info">
                <div className="works-info-name">Play to win rewards</div>
                <div className="works-info-desc">
                  Earn rewards when you play{" "}
                </div>
              </div>
            </div>
            <div className="works-item">
              <div className="works-number">3</div>
              <div className="works-info">
                <div className="works-info-name">
                  Claim and use your reward instantly
                </div>
                <div className="works-info-desc">
                  No point or coins that you need to accumulate over time
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="term">
        <div className="term-main">
          <div className="term-title">Terms and conditions</div>
          <div className="term-line"></div>
          <ul className="term-list">
            <div className="term-item">
              <div className="term-info">
                <div className="term-info-name">Games happen every Friday</div>
                <div className="term-info-desc">
                  Timer resets every Friday. Game stays live for one week. After
                  Thursday, the game restarts and everybody can play again.
                </div>
              </div>
            </div>
            <div className="term-item">
              <div className="term-info">
                <div className="term-info-name">
                  Pay this week. Earn next week.
                </div>
                <div className="term-info-desc">
                  Timer resets every Friday. Game stays live for one week. After
                  Thursday, the game restarts and everybody can play again.
                </div>
              </div>
            </div>
            <div className="term-item">
              <div className="term-info">
                <div className="term-info-name">If not paid, can’t play</div>
                <div className="term-info-desc">
                  Timer resets every Friday. Game stays live for one week. After
                  Thursday, the game restarts and everybody can play again.
                </div>
              </div>
            </div>
            <div className="term-item">
              <div className="term-info">
                <div className="term-info-name">Improve chances of winning</div>
                <div className="term-info-desc">
                  Timer resets every Friday. Game stays live for one week. After
                  Thursday, the game restarts and everybody can play again.
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="handle">
        <button className="handle-button">Continue</button>
      </div>
    </div>
  );
};

export default PreGame;
