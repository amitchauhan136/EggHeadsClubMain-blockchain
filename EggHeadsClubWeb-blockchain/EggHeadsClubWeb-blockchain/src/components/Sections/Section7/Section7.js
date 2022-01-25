import RoadMap from '../../../assets/Roadmap.png'
import TeamHeading from '../../../assets/Teamheading.png'
import instagram from '../../../assets/instagram.png'
import twitter from '../../../assets/twitter1.png'
import Marquee from "react-fast-marquee";
import globe from '../../../assets/globe.png'
import GeorgeEgg from '../../../assets/GeorgeEgg.png'
import AntonyEgg from '../../../assets/AntonyEgg.png'
import ZachEgg from '../../../assets/ZachEgg.png'
import JohnEgg from '../../../assets/JhonEgg.png'
import KarimEgg from '../../../assets/KarimEgg.png'
import HPEgg from '../../../assets/HPEgg.png'
import AnkurEgg from '../../../assets/AnkurEgg.png'
import AliEgg from '../../../assets/AliEgg.png'
import Slider from "react-slick";

function Section6() {
  
    const settings = {
   
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        swipeToSlide: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
               
              
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                
                }
              },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              
              }
            },
            {
              breakpoint: 460,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
     
      return (
      <div  className='Main6' id='Team'>
 <img src={TeamHeading} className="Main6-Heading"/>
   <div className='Team-div-row' >
      
          <Slider {...settings} >
          <div className='Team-div' >
        <img src={GeorgeEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#ffc71c '}}>
                <p className='name'>George</p>
            </div>
            <p className='designation'>EXECUTION</p>
            <div className='Main6-icon-div'>
                {/* <img src={instagram} className='Main6-icon'/> */}
                <a href='https://twitter.com/blissyEHC' target="_blank">
                <img src={twitter} className='Main6-icon'/>
                </a>
            </div>
        </div>

        <div className='Team-div'>
        <img src={AntonyEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#f671a0'}}>
                <p className='name'>Antony</p>
            </div>
            <p className='designation'>CREATIVE DIRECTOR</p>
            <div className='Main6-icon-div'>
                {/* <img src={instagram} className='Main6-icon'/> */}
                <a href='https://twitter.com/SirLeonEHC' target="_blank">
                <img src={twitter} className='Main6-icon'/>
                </a>
            </div>
        </div>


        <div className='Team-div'>
        <img src={ZachEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#566c8a'}}>
                <p className='name'>Zach</p>
            </div>
            <p className='designation'>COMMUNITY ENGAGEMENT</p>
            <div className='Main6-icon-div'>
                {/* <img src={instagram} className='Main6-icon'/> */}
                <a href='https://twitter.com/shezEHC' target="_blank">
                <img src={twitter} className='Main6-icon'/>
                </a>
            </div>
        </div>
        
        <div className='Team-div'>
        <img src={JohnEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#b7b7b7'}}>
                <p className='name'>Jonny</p>
            </div>
            <p className='designation'>MARKETING</p>
            <div className='Main6-icon-div'>
                {/* <img src={instagram} className='Main6-icon'/> */}
                <a href='https://twitter.com/JonnyEHC' target="_blank">
                <img src={twitter} className='Main6-icon'/>
                </a>
            </div>
        </div>

        <div className='Team-div'>
        <img src={KarimEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#7eb2ce'}}>
                <p className='name'>Karim</p>
            </div>
            <p className='designation'>ARTIST</p>
            <div className='Main6-icon-div'>
                <a href='https://www.instagram.com/kimo.nade/' target="_blank">
                <img src={instagram} className='Main6-icon'/>
                </a>
                {/* <img src={twitter} className='Main6-icon'/> */}
            </div>
        </div>

        <div className='Team-div'>
        <img src={HPEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#62976b'}}>
                <p className='name'>HashPotato</p>
            </div>
            <p className='designation'>WEBSITE DEVELOPMENT</p>
            <div className='Main6-icon-div'>
            <a href='https://www.hashpotato.io/' target="_blank">
                <img src={globe} className='Main6-icon'/>
                </a>
            </div>
        </div>

        <div className='Team-div'>
        <img src={AliEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#ff7f27'}}>
                <p className='name'>Ali</p>
            </div>
            <p className='designation'>GAME DEVELOPMENT</p>
            
        </div>

        <div className='Team-div'>
        <img src={AnkurEgg} className='egg'/>
            <div className='name-div' style={{backgroundColor:'#6F5C70'}}>
                <p className='name'>Ankur</p>
            </div>
            <p className='designation'>BLOCKCHAIN DEVELOPER</p>
            <div className='Main6-icon-div'>
                {/* <img src={instagram} className='Main6-icon'/>
                <img src={twitter} className='Main6-icon'/> */}
            </div>
        </div>
        
          </Slider>
          </div>
        </div>)

}

export default Section6;
