import "./App.css";
import React from "react";
import HamburgerMenu from "./assets/hamburger.png";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MintScreen from "./components/Sections/Minted/MintedScreen";
import Section1 from "./components/Sections/Section1/Section1.js";
import Section2 from "./components/Sections/Section2/Section2";
import Section3 from "./components/Sections/Section3/Section3";
import Section4 from "./components/Sections/Section4/Section4";
import Section5 from "./components/Sections/Section5/Section5";
import Section6 from "./components/Sections/Section6/Section6";
import Section7 from "./components/Sections/Section7/Section7";
import Section8 from "./components/Sections/Section8/Section8";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import Section11 from "./components/Sections/Section11/Section11";
import discord from "./assets/discordmenu.png";
import twitter from "./assets/twitter1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AllRightsReserved from "./assets/AllRightsReserved.png";
import Icon from "./assets/Icon.png";
import Connect from "./assets/Connect.png";
import rarityIcon from "./assets/rarity-nav.png";
import rarityIconHover from "./assets/rarity-nav-coloured.png";
import arcade from "./assets/arcade-nav.png";
import arcadeHover from "./assets/arcade-nav-coloured.png";
import roadmapIcon from "./assets/roadmap-nav.png";
import roadmapIconHover from "./assets/roadmap-nav-coloured.png";
import teamIcon from "./assets/team-nav.png";
import teamIconHover from "./assets/team-nav-coloured.png";
import faqIcon from "./assets/faqs-nav.png";
import faqIconHover from "./assets/faqs-nav-coloured.png";
import Privacy from "./components/Sections/Privacy/Privacy"
import { Link as LinkScroll } from "react-scroll";










function App() {
  const [menu, setmenu] = React.useState(false);
  const navbar = React.useRef(null);
  const refMain = React.useRef(null);
  const btnref = React.useRef(null);
  function closeNav() {
    navbar.current.style.display = "none";
    console.log("in close nav");
  }
  React.useEffect(() => {
    const onBodyClick = (e) => {
      if (navbar.current != null) {
        if (
          navbar.current.contains(e.target) ||
          btnref.current.contains(e.target)
        ) {
          console.log(e.target);
          return;
        }
        closeNav();
      }
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);


  return(
      <MintScreen/>
  )
}

export default App;
