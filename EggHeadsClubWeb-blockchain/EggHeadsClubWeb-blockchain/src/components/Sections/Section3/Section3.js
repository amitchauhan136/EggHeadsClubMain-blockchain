import Class from '../../../assets/class.png'
import Variation from '../../../assets/variation.png'
import Avatar from '../../../assets/cheetahUp1.gif'
import Rarity from '../../../assets/Rarity.png'
function Section3() {
  return (
  <div  className='Main2'  id="Rarity">
  
  <div style={{display: 'flex', width: '100%', justifyContent: 'center'}} >
  <img src={Rarity} className='Rarity-heading1'/>
  </div>
    <div className='Main2-row'>
   
    
  <div className='Rarity-box-parent' >
  <img src={Rarity} className='Rarity-heading'/>
    
    <div className="Rarity-box">
    <p className='Rarity-text text1'style={{width:'100%',margin:'0px 0px 30px 0px'}}>Our collection is generated from over 250 unique traits, with each resulting NFT split into 4 different classes of rarity.</p>
    <div className='Rarity-box-row'>
    <div className='Rarity-col col1' >
    <p className='Rarity-text text2'style={{width:'100%',margin:'20px 0px 40px 0px'}}>Our collection is generated from over 250 unique traits, with each resulting NFT split into 4 different classes of rarity.</p>
    
    <img src={Class} className='Class'/>
   
    <div className='Rarity-rows' >
    <p className='Rarity-text'>Classic</p>
    <p className='Rarity-text' style={{width:'25%'}}>55%</p>
    </div>

    <div className='Rarity-rows'style={{backgroundColor:'white'}}>
    <p className='Rarity-text'>Rare</p>
    <p className='Rarity-text' style={{width:'25%'}}>35%</p>
    </div>

    <div className='Rarity-rows' >
    <p className='Rarity-text'>Legendary</p>
    <p className='Rarity-text'style={{width:'25%'}}>9.3%</p>
    </div>

    <div className='Rarity-rows' style={{backgroundColor:'white'}}>
    <p className='Rarity-text'>Heroic*</p>
    <p className='Rarity-text' style={{width:'25%'}}>0.7%</p>
    </div>
    <img src={Avatar}  className="Avatar-img1"/>
    <p className='Rarity-text text2'style={{width:'100%',margin:'20px 0px 30px 0px'}}>* Heroic Egg Heads comprise 25 unique 1/1s released as part of the collection.</p>
    </div>
    <div className='Rarity-col'>
    <img src={Variation} className='Variation'/>
    <div className='Rarity-rows' style={{backgroundColor:'#CBE8F9'}}>
    <p className='Rarity-text' style={{width:'25%'}}>10</p>
    <p className='Rarity-text'>Backgrounds</p>
    </div>

    <div className='Rarity-rows'style={{backgroundColor:'white'}}>
    <p className='Rarity-text' style={{width:'25%'}}>52</p>
    <p className='Rarity-text'>Shell</p>
    </div>

    <div className='Rarity-rows' style={{backgroundColor:'#CBE8F9'}}>
    <p className='Rarity-text' style={{width:'25%'}}>19</p>
    <p className='Rarity-text'>Back Torso Accessories</p>
    </div>

    <div className='Rarity-rows' style={{backgroundColor:'white'}}>
    <p className='Rarity-text' style={{width:'25%'}}>23</p>
    <p className='Rarity-text'>Front Torso Accessories</p>
    </div>
    
    <div className='Rarity-rows' style={{backgroundColor:'#CBE8F9'}}>
    <p className='Rarity-text' style={{width:'25%'}}>6</p>
    <p className='Rarity-text'>Face</p>
    </div>

    <div className='Rarity-rows'style={{backgroundColor:'white'}}>
    <p className='Rarity-text' style={{width:'25%'}}>70</p>
    <p className='Rarity-text'>Headwear</p>
    </div>

    <div className='Rarity-rows' style={{backgroundColor:'#CBE8F9'}}>
    <p className='Rarity-text' style={{width:'25%'}}>13</p>
    <p className='Rarity-text'>Eye Style</p>
    </div>

    <div className='Rarity-rows' style={{backgroundColor:'white'}}>
    <p className='Rarity-text' style={{width:'25%'}}>17</p>
    <p className='Rarity-text'>Eyewear</p>
    </div>


    <div className='Rarity-rows' style={{backgroundColor:'#CBE8F9'}}>
    <p className='Rarity-text' style={{width:'25%'}}>61</p>
    <p className='Rarity-text'>Hand Accessories</p>
    </div>
    </div>
    </div>
 
    </div>
  </div>
   <div className="Avatar-div">
   <img src={Avatar}  className="Avatar-img"/>
   </div>
   </div>
   </div>
     
  );
}

export default Section3;
