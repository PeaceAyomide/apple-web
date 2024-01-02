import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    

  return (
    
    <footer data-aos="fade-down"
       data-aos-once="true"
    data-aos-easing="linear"
    data-aos-duration="1500"
class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">iwatch</a></li>
                    <li><a href="#">airpods</a></li>
                    <li><a href="#">macbook</a></li>
                    <li><a href="#">vpro</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><i> <FaFacebookF/></i></a>
                    <a href="#"><i><FaTwitter/></i></a>
                    <a href="#"><i><FaInstagram/></i></a>
                    <a href="#"><i><BsYoutube/></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>

      
  )
}

export default Footer