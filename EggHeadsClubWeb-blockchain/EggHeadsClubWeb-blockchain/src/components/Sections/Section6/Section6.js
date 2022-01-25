import RoadMap from "../../../assets/Roadmap.png";
import Mint from "../../../assets/Mintheading.png";
import LeftArrow from "../../../assets/left_arrow.png";
import Rightarrow from "../../../assets/right_arrow.png";
import Litepaper from "../../../assets/Litepaper.png";
import Q1heading from "../../../assets/Q1heading.png";
import Roadmapfooter from "../../../assets/3DVX.png";
import Q2heading from "../../../assets/Q2heading.png";
import Slider from "react-slick";
import Q3heading from "../../../assets/Q3heading.png";
import React from "react";
import eggbux from "../../../assets/eggheadbunny.png";
import headingvx from "../../../assets/3DVX.png";
import headingvxSmall from "../../../assets/3DVXSMALL.png";

function Section6() {
  const sliderref = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    swipe: false,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    sliderref.current.slickNext();
  };
  const previous = () => {
    sliderref.current.slickPrev();
  };
  return (
    <div className="Main5" id="RoadMap">
      <img src={RoadMap} className="Main5-Heading" />

      <Slider {...settings} className="Main5-row" ref={sliderref}>
        <div className="Main5-card">
          <img src={Mint} className="Main5-card-heading" />
          <p className="Main5-Text">
            0%: Private Discord channel available for NFT owners
            <br></br>
            <br></br>
            25%: Merchandise store launched
            <br></br>
            <br></br>
            "50%: Donation of 5% of primary sales profits to the RSPCA"
            <br></br>
            <br></br>
            75% The chronicles of Eggtopia released as a digital storybook on
            our website
          </p>
        </div>
        <div className="Main5-card card2">
          <img src={Q1heading} className="Main5-card-heading" />
          <p className="Main5-Text">
            Egg Jump game released (beta version)
            <br></br>
            <br></br>
            Vote on next arcade games
            <br></br>
            <br></br>
            Community DAO is officially launched
            <br></br>
            <br></br>
            Special Q1 raffles for holders!
            <br></br>
            <br></br>
            3D Egg Heads VX sneak peeks for Sandbox
          </p>
        </div>
        <div className="Main5-card card3">
          <img src={Q2heading} className="Main5-card-heading" />
          <p className="Main5-Text">
            $EGBX launch
            <br></br>
            <br></br>
            Liquidity pools launched
            <br></br>
            <br></br>
            New arcade mini-games launched
            <br></br>
            <br></br>
            Land purchased in Sandbox for Eggtopia
            <br></br>
            <br></br>
            Free mint of 3D Egg Heads Club NFTs for 1st gen holders
            <br></br>
            <br></br>
            Core team expansion
          </p>
        </div>
        <div className="Main5-card card4">
          <img src={Q3heading} className="Main5-card-heading" />
          <p className="Main5-Text">
            Full Egg Heads Arcade series launched on iOS & Android
            <br></br>
            <br></br>
            Breeding of 2nd generation Egg Heads
            <br></br>
            <br></br>
            Metaverse map and 3D RPG game released
            <br></br>
            <br></br>
            Party time! Real-life events for our incredible community
          </p>
        </div>
      </Slider>
      <div className="button-row">
        <img src={LeftArrow} className="arrow" onClick={() => previous()} />
        <img src={Rightarrow} className="arrow" onClick={() => next()} />
      </div>

      <div className="Roadmap-footer1">
        <img src={eggbux} className="bunny-avatar" />
        <img src={headingvx} className="Roadmap-text regular" />
        <img src={headingvxSmall} className="Roadmap-text small" />
      </div>
    </div>
  );
}

export default Section6;
