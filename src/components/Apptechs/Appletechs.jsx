import React from 'react'
import './appletechs.css'
import IPHONE14PRO  from '../assets/iPhone-14-Pro-Max-PNG.png'
import MACBOOK from '../assets/macbookpro.png'
import IWATCH from '../assets/iwatch.png'
import APPLEVSIONPRO from '../assets/Apple-Vision-Pro.png'
import {BsLink45Deg} from 'react-icons/bs'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"




const Appletechs = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])


  return (
    <section class="portfolio" id="portfolio">
<h2 data-aos="fade-down"
   data-aos-once="true"
     data-aos-easing="linear"
     data-aos-duration="1500"  class="heading"><span>MODELS</span></h2>
<div class="portfolio-container">
<div data-aos="fade-left"
   data-aos-once="true"
     data-aos-easing="linear"
     data-aos-duration="1500" class="portfolio-box">
<img  src={IPHONE14PRO} alt="" />
<div class="portfolio-layer">
<h4>IPHONE 14 PRO</h4>
<p>"Unleash the future with the iPhone 14 Pro - a pocket-sized portal to tomorrow's technology. Elevate your reality today!"</p>
<a href=""><i><BsLink45Deg/></i></a>
</div>
</div> 

<div data-aos="fade-right"
   data-aos-once="true"
     data-aos-easing="linear"
     data-aos-duration="1500" class="portfolio-box">
    <img  src={MACBOOK}   alt="" />
    <div class="portfolio-layer">
    <h4>MACBOOK</h4>
    <p>"Upgrade your journey with sleek sophistication - own a MacBook, transcend possibilities."</p>
    <a href=""><i><BsLink45Deg/></i></a>
    </div>
    </div>  

    <div data-aos="fade-up"
       data-aos-once="true"
     data-aos-easing="linear"
     data-aos-duration="1500" class="portfolio-box">
        <img  src={IWATCH} alt="" />
        <div class="portfolio-layer">
        <h4>IWATCH</h4>
        <p>"Elevate your wristwear game with the iWatch Quantum Series - where time meets technology in stunning harmony. Limited stock, seize the future now!"</p>
        <a href=""><i><BsLink45Deg/></i></a>
        </div>
        </div>  
        <div data-aos="fade-right"
           data-aos-once="true"
     data-aos-easing="linear"
     data-aos-duration="1500" class="portfolio-box">
        <img  src={APPLEVSIONPRO} alt="" />
        <div class="portfolio-layer">
        <h4>VISIONPRO</h4>
        <p>"Unlock the future with VisionPro - See the world through the ultimate Apple lens. Elevate your reality today!"</p>
        <a href=""><i><BsLink45Deg/></i></a>
        </div>
        </div>  
        
</div>
</section>

  )
}

export default Appletechs