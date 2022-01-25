import WhiteEggHeads from "../../../assets/WhiteEggheads.png";
import Connect from "../../../assets/Connect.png";
import Presale from "../../../assets/presale.png";
import Litepaper from "../../../assets/Litepaper.png";
import EggHeadsLogo from "../../../assets/EggHeadsLogo.png";
import TwitterIcon from "../../../assets/Twitter.png";
import DiscordIcon from "../../../assets/Discord.png";
import Follow from "../../../assets/Follow.png";
import pdf from "../../../assets/Egg-Heads-Litepaper.pdf";
import AllRightsReserved from "../../../assets/AllRightsReserved.png";
import rarityIcon from "../../../assets/rarity-nav.png";
import rarityIconHover from "../../../assets/rarity-nav-coloured.png";
import arcade from "../../../assets/arcade-nav.png";
import arcadeHover from "../../../assets/arcade-nav-coloured.png";
import roadmapIcon from "../../../assets/roadmap-nav.png";
import roadmapIconHover from "../../../assets/roadmap-nav-coloured.png";
import teamIcon from "../../../assets/team-nav.png";
import teamIconHover from "../../../assets/team-nav-coloured.png";
import faqIcon from "../../../assets/faqs-nav.png";
import faqIconHover from "../../../assets/faqs-nav-coloured.png";
import followSmall from "../../../assets/Follow-Mobile.png";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
function Section1() {
  return (
    <div className="Main" id="Home">
      <div className="Header">
        <img className="EggImage" src={WhiteEggHeads} />

        <LinkScroll
          className="Main-Nav"
          to="Rarity"
          smooth={true}
          duration={800}
        >
          <img className="Navimg1" src={rarityIcon} />
          <img className="Navimg1-hover" src={rarityIconHover} />
        </LinkScroll>
        <LinkScroll
          className="Main-Nav"
          to="GamePlay"
          smooth={true}
          duration={800}
        >
          <img className="Navimg2" src={arcade} />
          <img className="Navimg2-hover" src={arcadeHover} />
        </LinkScroll>
        <LinkScroll
          className="Main-Nav"
          to="RoadMap"
          smooth={true}
          duration={800}
        >
          <img className="Navimg3" src={roadmapIcon} />
          <img className="Navimg3-hover" src={roadmapIconHover} />
        </LinkScroll>
        <LinkScroll className="Main-Nav" to="Team" smooth={true} duration={800}>
          <img className="Navimg4" src={teamIcon} />
          <img className="Navimg4-hover" src={teamIconHover} />
        </LinkScroll>

        <LinkScroll className="Main-Nav" to="FAQ" smooth={true} duration={800}>
          <img className="Navimg5" src={faqIcon} />
          <img className="Navimg5-hover" src={faqIconHover} />
        </LinkScroll>
        <div
          style={{
            width: "120px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="ConnectImg" src={Connect} />
        </div>
      </div>

      <img src={EggHeadsLogo} className="LogoImg" />

      <Link to={"/MintedScreen"}>
      <img src={Presale} className="containerimg" />
      </Link>

      <a href={'https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg-Heads-Club-Litepaper.pdf?alt=media&token=8fdd353c-3d3f-4461-a4b7-1c07b8c87bb9'} target="_blank">
        <img src={Litepaper} className="containerimg1" />
      </a>
      <img src={Follow} className="textimg1 textregular" />
      <img src={followSmall} className="textimg1 textsmall" />
      <div className="socialcontainer">
        <a href="https://discord.gg/PxY4NwbmGT" target="_blank">
          <img src={DiscordIcon} className="socialimg" />
        </a>
        <a href="https://twitter.com/eggheadsclub" target="_blank">
          <img src={TwitterIcon} className="socialimg" />
        </a>
      </div>

      <img src={AllRightsReserved} className="textimg" />
    </div>
  );
}

export default Section1;
