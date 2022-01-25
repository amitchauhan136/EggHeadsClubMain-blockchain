import React from "react";
import slider from "../../../assets/slider.png";
import introeggjump from "../../../assets/introeggjump.png";
import introeggjumpSmall from "../../../assets/introeggjump-mobile.png";
import Litepaper from "../../../assets/ReadOurLitepaperHere.png";
import pdf from "../../../assets/Egg-Heads-Litepaper.pdf";
import Marquee from "react-fast-marquee";
import Play from "../../../assets/play-button.png";
import ModalVideo from "react-modal-video";

function Section4() {
  const [videoOpen, setvideoOpen] = React.useState(false);
  const [ratio, setratio] = React.useState(
    window.matchMedia("(min-width: 650px)").matches ? "16:9" : "4:3"
  );

  return (
    <>
      <div className="Main3" id="GamePlay">
        <div className="Main3-div">
          <div className="Main3-div-row2">
            <img src={introeggjump} className="introeggjump regular" />
            <img src={introeggjumpSmall} className="introeggjump small" />
            <div className="introeggjumpbox">
              <p className="Main3-text Main3text1">
                Our mission is to fuse the world of NFTs with retro arcade-style
                gaming. We plan to bring out a series of unique play-to-earn
                games designed to capture the essence of our youth, under the
                Egg Heads Arcade brand. The first of these games is Egg Jump,
                which is already in development.
                <br />
                <br />
                In Egg Jump, you will control your Egg Head as they embark on a
                perilous dive off the top of Mount Eggerest. Along the way, they
                will encounter an array of obstacles, as well as wonderful
                riches, and even some super springy mushrooms. The game's
                difficulty, based on both falling speed and frequency of
                obstacles, will increase the further your Egg Head has fallen,
                with your score rising proportionally.
                <br />
                <br /> Check out the preview on the right!
              </p>

              <p className="Main3-text Main3text2">
                Our mission is to fuse the world of NFTs with retro arcade-style
                gaming. We plan to bring out a series of unique play-to-earn
                games designed to capture the essence of our youth, under the
                Egg Heads Arcade brand.
                <br />
                <br />
                The first of these games is Egg Jump, which is already in
                development.Check out the preview below!
              </p>
            </div>

            <a href={'https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg-Heads-Club-Litepaper.pdf?alt=media&token=8fdd353c-3d3f-4461-a4b7-1c07b8c87bb9'} target="_blank">
              <img src={Litepaper} className="Main3-Litepaper" />
            </a>
          </div>
          <div className="Mobile">
            <a href="https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg%20Jump%20Gameplay%20Trailer%20Updated.mp4?alt=media&token=2489da23-3319-4055-bff4-317265217fcc">
              <img src={Play} className="Play-btn" />
            </a>
          </div>
          {/* <ModalVideo  ratio={ratio}  channel='custom' autoplay isOpen={videoOpen} allowFullScreen={true} coverScreen={true} url={'https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg%20Jump%20Gameplay%20Trailer%20Updated.mp4?alt=media&token=2489da23-3319-4055-bff4-317265217fcc'} onClose={() => setvideoOpen(false)} /> */}
          <a href={'https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg-Heads-Club-Litepaper.pdf?alt=media&token=8fdd353c-3d3f-4461-a4b7-1c07b8c87bb9'} target="_blank">
            <img
              src={Litepaper}
              className="Main3-Litepaper Main3-Litepaper-Mobile "
            />
          </a>
        </div>

        {/* <div className="Main3-div-2">
 
 <img src={Leftarrow} className='arrow'/>
 <div style={{backgroundColor:'black',width:'250px',height:'350px'}}>
   
 </div>
 <img src={Rightarrow} className='arrow'/>
 </div> */}

        <Marquee gradient={false} className="Main3-marquee" speed={30}>
          <img src={slider} className="Main3-img" />
          <img src={slider} className="Main3-img" />
          <img src={slider} className="Main3-img" />
        </Marquee>
      </div>
    </>
  );
}

export default Section4;
