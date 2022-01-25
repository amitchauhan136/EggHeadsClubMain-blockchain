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



  function MainScreen(){
    return(
      <>

<div ref={refMain}>
      <div className="App">
        <img
          src={HamburgerMenu}
          className="hamburger"
          ref={btnref}
          onClick={() => {
            const styles = getComputedStyle(navbar.current);
            if (styles.display == "flex") {
              navbar.current.style.display = "none";
            } else {
              navbar.current.style.display = "flex";
            }
          }}
        />
        <LinkScroll
          to="Home"
          onClick={() => (navbar.current.style.display = "none")}
          smooth={true}
          duration={800}
        >
          <img src={Icon} className="logo-scroll" />
        </LinkScroll>
        <Section1 />
        <div className="seperator" />
        <Section2 />
        <div className="seperator" />
        <Section3 />
        <div className="seperator" />
        <Section4 />

        <Section5 />
        <div className="seperator" />
        <Section6 />
        <div className="seperator" />
        <Section7 />
        <div className="seperator" />
        <Section8 />

        <div className="seperator" />
        <Section11 />
        <div className="footer">
          <img src={AllRightsReserved} className="textimg" />
        </div>
      </div>

      <div className="menu-div" ref={navbar}>
        <div className="menu-header">
          <div className="menu-row1">
            <LinkScroll
              className="Main-Nav"
              to="Rarity"
              onClick={() => (navbar.current.style.display = "none")}
              smooth={true}
              duration={800}
            >
              <img className="Navimg1 menu-label" src={rarityIcon} />
              <img className="Navimg1-hover menu-label" src={rarityIconHover} />
            </LinkScroll>
            <LinkScroll
              className="Main-Nav"
              to="GamePlay"
              smooth={true}
              duration={800}
              onClick={() => (navbar.current.style.display = "none")}
            >
              <img className="Navimg2 menu-label" src={arcade} />
              <img className="Navimg2-hover menu-label" src={arcadeHover} />
            </LinkScroll>
            <LinkScroll
              className="Main-Nav"
              to="RoadMap"
              smooth={true}
              duration={800}
              onClick={() => (navbar.current.style.display = "none")}
            >
              <img className="Navimg3 menu-label" src={roadmapIcon} />
              <img
                className="Navimg3-hover menu-label"
                src={roadmapIconHover}
              />
            </LinkScroll>
            <LinkScroll
              className="Main-Nav"
              to="Team"
              smooth={true}
              duration={800}
              onClick={() => (navbar.current.style.display = "none")}
            >
              <img className="Navimg4 menu-label" src={teamIcon} />
              <img className="Navimg4-hover menu-label" src={teamIconHover} />
            </LinkScroll>

            <LinkScroll
              className="Main-Nav"
              to="FAQ"
              smooth={true}
              duration={800}
              onClick={() => (navbar.current.style.display = "none")}
            >
              <img className="Navimg5 menu-label" src={faqIcon} />
              <img className="Navimg5-hover menu-label" src={faqIconHover} />
            </LinkScroll>
          </div>
          <div className="menu-row2">
            <div className="menu-footer-div">
              <a href="https://discord.gg/PxY4NwbmGT" target="_blank">
                <img src={discord} className="menu-footer-img" />
              </a>
              <a href="https://twitter.com/eggheadsclub" target="_blank">
                <img src={twitter} className="menu-footer-img" />
              </a>
            </div>
            <img className="menu-pic" src={Connect} />
          </div>
        </div>

        {/* <div className='menu-footer'>
    <div className='menu-footer-div'>
      <img src={DiscordIcon} className='menu-footer-img'/>
       <img src={TwitterIcon} className='menu-footer-img'/>
      </div>
      <div className='menu-footer-div'>

      <p className='footer-text'>Terms of use</p>
            <p className='footer-text'>Privacy policy</p>
      </div>
     
    // </div> */}
       </div>
     </div>
      </>
    )
  }

  return (



// <Privacy/>
<>


<Router>
      <Routes>
      <Route path='/' element={<MainScreen/>} />
      <Route path='/MintedScreen' element={<MintScreen/>} />
      <Route path="/privacypolicy" element={<Privacy/>}/>
     
      
      </Routes>
    </Router>




</>
    // <Privacy/>
    //   <Switch>
    //   <Route exact path="/">
    //     <Home />
    //   </Route>
    //   <Route path="/about">
    //     <About />
    //   </Route>
    //   <Route path="/dashboard">
    //     <Dashboard />
    //   </Route>
    // </Switch>
  );
}

export default App;
