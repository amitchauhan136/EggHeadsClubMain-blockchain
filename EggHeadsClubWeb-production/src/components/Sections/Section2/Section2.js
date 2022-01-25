
import Marquee from "react-fast-marquee";
import HatchingSoon from '../../../assets/hatchingsoon.png'
import EggHeadsSlideshow from '../../../assets/EggHeadsSlideshow.png'
import EggHeadsHeading from '../../../assets/getyoureggheads-heading.png'
import GetyourEgg from '../../../assets/GetyourEgg.png'
import Hatchingsoon from '../../../assets/hatchingsoonpink.png'
function Section2() {
  return (
  <div  className='Main1'>
      <Marquee gradient={false} className='slideshow-div' speed={30}  >
       <img src={EggHeadsSlideshow} className='slideshow'/>
       
       
      </Marquee>
      
      <div className='GetyourEggHeads-div'>
      <div className="GetyourEggHeads-box">
       
          <img src={GetyourEgg} className="GetyouEgg-Egg"/>
    
      <img src={EggHeadsHeading} className="GetyourEggHeads-Heading"/>
      <p className="GetyourEggHeads-text">Greetings Earthlings!<br/>Welcome to the Egg Heads Club.
Home to the land of Eggtopia
and its community of 3,500 Egg
Heads – the most ingenious NFTs
minted on the Ethereum
blockchain. Coupled with a
unique, retro play-to-earn gaming
experience. <br/>Your nest egg to own forever. </p>
      <img src={Hatchingsoon}  className="HatchingSoon"/>
      </div>
      </div>
       </div>

  );
}

export default Section2;
