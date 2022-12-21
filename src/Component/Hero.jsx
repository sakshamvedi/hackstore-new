    import React from 'react'
    import { Link } from "react-router-dom";
    import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
    import { bounce } from 'react-animations';
    import 'pure-react-carousel/dist/react-carousel.es.css';
    import {AiFillAliwangwang, AiFillInfoCircle,AiFillThunderbolt} from "react-icons/ai"
    import {MdAdd} from "react-icons/md"
    import { GiHamburgerMenu , GiPlayButton} from "react-icons/gi";
    import { WiStars}  from "react-icons/wi";
    import { useRef } from 'react';
    import {SiAbbvie, SiAdidas, SiGnuicecat, SiNike, SiPuma ,SiReebok} from 'react-icons/si'
    import { useEffect } from 'react';
    function Hero() {
        const img = ["img1.jpg" , "img0.jpg" , "img2.jpg" , "img3.jpg" , "img4.jpg" ,"img5.jpg"];
    
    const [idx,setIdx] = React.useState([ "i3.webp" , "i1.jpg" , "ia.webp" , "i2.jpg" , "i5.webp"]);
    const myvideoref = useRef();



    return (
    
            <>
            <div className='herobox'>
        
            <div className="crousel">
            <CarouselProvider
            naturalSlideWidth={150}
            naturalSlideHeight={100}
            totalSlides={idx.length}
            isPlaying  = {true}
            >
            <Slider>
            {
    idx.map((imagevalue)=>{
        return (
            <>
            <Slide index={0}><img src={imagevalue}></img></Slide>
            </>
        )
    })
            }
            </Slider>
        </CarouselProvider>
        
            </div>  
        
        <div className='spotlightcard'>
    <h1><WiStars color='white' size = {25} /> App of the Day </h1>
<video src='https://cdn.dribbble.com/userupload/2844194/file/original-42693b0ba5a9ec8bfcf45fde19eee2c2.mp4' autoPlay = {true} loop></video>
<button><MdAdd/>  Add</button>
<h1 className="spotname"> Freemium

</h1>
 <Link to = "/basket">
<h1 className = "spotname2">ConceptZilla : (Concepts with Foucus)</h1>
</Link>

        </div>
      
            </div>
            
           
<div className='clothing'>
     <h1> Outlets Desgine for Geeks </h1>
</div>




            </>


    )
    }

    export default Hero