import Ethblue from "../../../assets/ethblue.gif";
import EggBux from "../../../assets/EggBuxCoin.gif";
import eggHatch from "../../../assets/eggHatch.gif";
import eggBuxIcon from "../../../assets/eggbux-heading.png";
import eggBuxIconSmall from "../../../assets/eggbux-heading-mob.png";

function Section5() {
  return (
    <div className="Main4">
      <img className="Main4-Heading regular" src={eggBuxIcon} />
      <img className="Main4-Heading small" src={eggBuxIconSmall} />
      <div className="Main4-row">
        <div className="col" style={{ marginTop: "25px" }}>
          <div className="img-col">
            <img src={Ethblue} className="Main4-col1-img1" />
          </div>
          <div className="text-col">
            <p className="EggBux-body-text">
              Hatch your Egg Head by minting from our first collection. This
              will enable you to play Egg Jump and the other Egg Heads Arcade
              games!{" "}
            </p>
          </div>
        </div>
        <div className="col" style={{ marginTop: "15px" }}>
          <div className="img-col">
            <img src={EggBux} className="Main4-col2-img1" />
          </div>
          <div className="text-col">
            <p className="EggBux-body-text">
              Earn EggBux ($EGBX) by playing our play-to-earn games. Spend it on
              in-game features or redeem it for some sweet merch.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="img-col">
            <img src={eggHatch} className="Main4-col3-img1" />
          </div>
          <div className="text-col">
            <p className="EggBux-body-text">
              {" "}
              Challenge your friends and top the leaderboards to receive
              generous prizes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
