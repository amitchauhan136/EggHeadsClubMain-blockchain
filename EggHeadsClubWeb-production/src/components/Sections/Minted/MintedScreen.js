import React from "react";
import "./MintedScreen.css";
import logohere from "../../../assets/AnkurEgg.png"
import fancyagame from "../../../assets/fancygame2x.png"
import timings from "../../../assets/0.04-ETH2x.png"
import connectedwallet from "../../../assets/connect-wallet2x.png"
import mainlogo from "../../../assets/EggHeadsLogo.png"
import bckgrndimg from "../../../assets/Pinkbackground.png"
import crossicon from "../../../assets/cross2x.png"


const MintScreen =()=>{



    return(


    <>



    <div className="background_of_minted_screen ">
               

   <div className="first_div_of_minted_screen">
   <img className="cross_icon_of_minted_screen" 
   height={40}
src={crossicon} />
    
   </div>
        

     



     
   <img  className="logo_of_minted_screen"  src={mainlogo} />





{/* 
      <div className="third_div_of_minted_screen"> */}
   <img className="fancyicon_of_minted_screen"  src={fancyagame} />

          
      {/* </div> */}

    
   
                  <div className="insider_of_fourth_div_of_minted_screen">

                       <p  className="eggheadsminted_of_minted_screen">Egg Heads Minted: 0/3500</p>
                  </div>
          
    



      <div className="fifth_div_of_minted_screen">
   
                  <input className="input_of_minted_screen" value={1}  type="number" />
          
      </div>



    
     <img className="gas_fee_req"   src={timings} />
  







    <img className="connect_button" src={connectedwallet} />
  






    </div>
    </>
    )
}


export default MintScreen;