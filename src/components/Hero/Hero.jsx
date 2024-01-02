import React, { useState, useEffect } from 'react';
import './hero.css';
import Iphone from '../assets/Iphone-14-PNG.png';
import { BsCart4 } from 'react-icons/bs';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchased(true);

    // Simulate a delay and then reset to "PREORDER" state
    setTimeout(() => {
      setIsPurchased(false);
    }, 3000);
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <h3
          data-aos='fade-down'
           data-aos-once="true"
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          What's New
        </h3>
        <h1 data-aos='fade-right'
           data-aos-once="true"
          >iPhone 14</h1>
        <p data-aos='zoom-in'  data-aos-once="true"
          >
          Introducing the iPhone 14, where innovation and sophistication
          converge to redefine the smartphone experience. With its sleek
          design, cutting-edge technology, and seamless integration, the
          iPhone 14 is a true masterpiece. Experience the future in the palm
          of your hand.
        </p>
        <br />
        <button
          data-aos='zoom-in'  data-aos-once="true"
          onClick={handlePurchaseClick}
          className='btn'
        >
          {isPurchased ? (
            <>
              PURCHASED <BsFillBookmarkCheckFill />
            </>
          ) : (
            <a>
              PREORDER <BsCart4 />
            </a>
          )}
        </button>
      </div>
      <div data-aos='fade-right' 
         data-aos-once="true"
        className='home-img'>
        <img src={Iphone} alt='' />
      </div>
    </section>
  );
};

export default Hero;
