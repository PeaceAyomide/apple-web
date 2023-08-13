import React from 'react'
import './vpro.css'
import VPRO from '../assets/Girl-wearing-Apple-Vision-Pro.png'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Vpro = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])


  return (
    <section class="about" id="about">
<div class="about-img">
   <img  data-aos="fade-up" data-aos-offset="300"
        data-aos-easing="ease-in-sine" src={VPRO} alt=""/> 
</div>

<div class="about-content">
<h2 data-aos="fade-up"  data-aos-easing="linear"
     class="heading">New <span>VPRO</span></h2>
<p data-aos="fade-left" data-aos-duration="20000" >Apple VPRO is a cutting-edge product lineup by Apple Inc. featuring the powerful SuperChip, stunning UltraVision Display, advanced security with SecureGuard, intuitive iSense controls, fast 5G connectivity with SkyWave, high-quality audio through AirPods Max, and health tracking with iFit. It also includes the convenient MagLev magnetic charging system. Apple VPRO showcases Apple's commitment to innovation and quality in the realm of consumer electronics.</p>
</div>
</section>

  )
}

export default Vpro