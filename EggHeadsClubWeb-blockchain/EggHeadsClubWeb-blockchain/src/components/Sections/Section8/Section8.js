import React from 'react'
import Faq from '../../../assets/FAQ.png'

function Section8() {
    const [expanded,setexpanded]=React.useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ])
const toggleexpand=(indexno)=>
{
    setexpanded(expanded.map((item,index)=>{
        return index==indexno?!item:false
    }))
}
    
  return (
  <div  className='Main8' id='FAQ'>
    <img src={Faq} className='Main8-Heading'/>

    <div className='card-div' style={{backgroundColor:expanded[3]?'#ffe9c7':'#76B2FF'}}>
    <div className='title-div' style={{backgroundColor:'#76B2FF',borderStyle:expanded[3]?'solid':'none'}} onClick={(e)=>{toggleexpand(3)}}>
                <p className='title'>What is an NFT?</p>
            </div>
            {expanded[3] &&
            <div className='label-div'>
                <p className='label'>NFT stands for ‘non-fungible token’. Sounds complicated, huh? It’s really just a token that is used to represent ownership of digital items.</p>
            </div>
}
    </div>

    <div className='card-div' style={{backgroundColor:expanded[0]?'#ffe9c7':'#FF65A1'}}>
    <div className='title-div' style={{backgroundColor:'#FF65A1',borderStyle:expanded[0]?'solid':'none'}} onClick={(e)=>{
        toggleexpand(0)
      
    }}>
                <p className='title'>What is Egg Heads Club?</p>
            </div>
            {expanded[0] &&
            <div className='label-div'>
            <p className='label'>Egg Heads Club is a collection of 3,500 unique NFTs stored on the Ethereum blockchain, coupled with a unique, retro play-to-earn (P2E) gaming experience.</p>
        </div>
            }
            
    </div>
    <div className='card-div' style={{backgroundColor:expanded[1]?'#ffe9c7':'#586D8A'}}>
    <div className='title-div' style={{backgroundColor:'#586D8A',borderStyle:expanded[1]?'solid':'none'}} onClick={(e)=>{toggleexpand(1)}}>
                <p className='title'>What can my Egg Head do?</p>
            </div>
            {expanded[1]&&
            <div className='label-div'>
                <p className='label'>First things first, you can set it as your avatar and stare at it-you'll probably want to since, let's
be honest, they're cute AF. Ownership of an Egg Head will grant you exclusive access to our
upcoming series of play-to-earn games, the first of which is already in development.
</p>
            </div>
            }
    </div>
            
    <div className='card-div' style={{backgroundColor:expanded[2]?'#ffe9c7':'#FFC000'}}>
    <div className='title-div' style={{backgroundColor:'#FFC000',borderStyle:expanded[2]?'solid':'none'}} onClick={(e)=>{toggleexpand(2)}}>
                <p className='title'>How will the P2E aspect of your games work?</p>
            </div>
            {expanded[2] &&
            <div className='label-div'  >
                <p className='label p2etext'>Down the road we will be launching our EggBux ($EGBX) token. You will be able to earn $EGBX by playing the Egg Heads Arcade games; the amount of $EGBX you will be able to
earn will depend on your in-game performance. $EGBX will have real-world value and will provide utility through several channels, such as being redeemable for merchandise and for
breeding second-generation Egg Heads in the future. If you’re interested, our Litepaper has more information - check it out!</p>
            </div>
}
    </div>
            
   
            
    <div className='card-div' style={{backgroundColor:expanded[4]?'#ffe9c7':'#b7b7b7'}}>
    <div className='title-div' style={{backgroundColor:'#b7b7b7',borderStyle:expanded[4]?'solid':'none'}} onClick={(e)=>{toggleexpand(4)}}>
                <p className='title'>How can I mint?</p>
            </div>
            {expanded[4] &&
            <div className='label-div'>
                <p className='label'>
                Minting will be carried out through our website, www.eggheadsclub.io. You will first need to set up a MetaMask wallet, and then you will need to purchase some Ethereum. This might
sound scary but it’s really not - we’ll have a guide over on our Discord, or alternatively, navigate <a href='https://metamask.io/' target="_blank">here</a> and find out straight from the source.
                </p>
               
            </div>
            }
    </div>

    <div className='card-div'  style={{backgroundColor:expanded[5]?'#ffe9c7':'#62976B'}}>
    <div className='title-div' style={{backgroundColor:'#62976B',borderStyle:expanded[5]?'solid':'none'}} onClick={(e)=>{toggleexpand(5)}}>
                <p className='title'>How many can I mint?</p>
            </div>
            {expanded[5] &&
            <div className='label-div'>
                <p className='label'>Whitelist presale: 2 NFTs maximum.
                <br/><br/>
                Public sale: 5 NFTs maximum.</p>
            </div>
}
    </div> 

    <div className='card-div' style={{backgroundColor:expanded[6]?'#ffe9c7':'grey'}}>
    <div className='title-div' style={{backgroundColor:'grey',borderStyle:expanded[6]?'solid':'none'}} onClick={(e)=>{toggleexpand(6)}}>
                <p className='title'>How can I contact the team?</p>
            </div>
            {expanded[6]&&
            <div className='label-div'>
                <p className='label'>Find us here on Discord and on Twitter! Alternatively, feel free to shoot us an email at admin@eggheadsclub.io.</p>
            </div>
}
    </div>    

    

    </div>
  );
}

export default Section8;
