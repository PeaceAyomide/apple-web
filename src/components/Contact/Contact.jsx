import React from 'react'
import './contact.css'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"



const Contact = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])


  return (
	<section>
    
    <div class="section-header" id='contact'>
      <div class="container">
        <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
>Contact <span>Us</span></h2>
        <p>"Swipe left to unlock a conversation with the future – our Contact page is a portal where your fingertips meet our digital concierge for a cosmic chat experience beyond the touchscreen!"</p>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
 class="contact-info-icon">
              <i> <ImLocation/></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500"
 class="contact-info-icon">
              <i><AiOutlinePhone/></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>561-456-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"
 class="contact-info-icon">
              <i><BsFillEnvelopeFill/></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>Apple@email.com</p>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
 class="contact-form">
          <form  action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  
  )
}

export default Contact