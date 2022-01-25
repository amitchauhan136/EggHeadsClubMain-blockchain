import thatsallyolks from '../../../assets/thatsallyolks.gif'
import ViewonOpensea from '../../../assets/ViewonOpensea.png'
import TwitterIcon from '../../../assets/Twitter.png'
import DiscordIcon from '../../../assets/Discord.png'
import PrivacyPolicy from '../../../assets/PrivacyPolicy-text.png'
import Soononetherscan from '../../../assets/Soononetherscan.png'
function Section11() {
  return (
  <div className='Main11'>
   <img src={thatsallyolks} className='Main11-heading'/>
   <img src={Soononetherscan} className='Main11-box'/>
<div className='Main11-socialcontainer'>
   <a href="https://discord.gg/PxY4NwbmGT" target="_blank">
   <img src={DiscordIcon} className='Main11-socialimg'/>
       </a>
       <a href="https://twitter.com/eggheadsclub" target="_blank">
       <img src={TwitterIcon} className='Main11-socialimg'/>
       </a>
       
      
    </div>
   
   
  <img src={PrivacyPolicy} className='text-img'/>
    </div>

  );
}

export default Section11;
