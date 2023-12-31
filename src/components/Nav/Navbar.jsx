import React, { useState } from "react";
import "./navbar.css";
import APPLELOGO from '../assets/apple.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeNavbar = () => {
    setIsOpen(false);
  };

 
  return (
    <div className="Navbar">
      <span className="nav-logo"><img src={APPLELOGO} /></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home" onClick={closeNavbar}>Home</a>
        <a href="#about" onClick={closeNavbar}>About</a>
        <a href="#portfolio" onClick={closeNavbar}>Models</a>
        <a href="#contact" onClick={closeNavbar}>Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;