import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LogoWordmark from '../../assets/images/Logos/logo wordmark_black.svg';

const Footer = ({ isHome }) => (
  <footer className={`footer${isHome ? ' footer-snap' : ''}`}>
    <div className="footer-nav">
      <div className="footer-col">
        <h4 className="footer-col-title"><u>Studio</u></h4>
        <ul className="footer-col-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/membership">Join Our Membership</Link></li>
          <li><Link to="/rental">Studio Rental</Link></li>
          <li><Link to="/contact">Get In Touch</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="footer-col-title"><u>Classes</u></h4>
        <ul className="footer-col-links">
          <li><Link to="/classes">All Classes</Link></li>
          <li><Link to="/beginners">Beginners</Link></li>
          <li><Link to="/schedule">View Schedule</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="footer-col-title"><u>Connect</u></h4>
        <ul className="footer-col-links">
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="mailto:hello@marcellestudios.com">hello@marcellestudios.com</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-wordmark">
      <img src={LogoWordmark} alt="Marcelle Studios" className="footer-logo" />
    </div>
  </footer>
);

export default Footer;
