import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import LogoWordmarkNavy from '../../assets/images/Logos/logo wordmark_navy.svg';
import OverlayMenu from './OverlayMenu';
import heroImg from '../../assets/images/hero/hero.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close on Esc and lock body scroll while open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', onKeyDown);
      // lock scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`header ${isHome ? 'home' : 'inner'}`}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={LogoWordmarkNavy} alt="Marcelle Studios" className="logo-img" />
            </Link>

            {/* Burger button */}
            <button
              className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
              onClick={toggleMenu}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="site-drawer"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <OverlayMenu isOpen={isMenuOpen} onClose={closeMenu} />
          </div>
        </div>
        {isHome && (
          <section className="hero">
            <img
              className="hero-media"
              src={heroImg}
              alt="Person practicing reformer Pilates at Marcelle Studios"
            />
            <div className="hero-overlay">
              <h1 className="hero-heading">Move with us</h1>
            </div>
          </section>
        )}
      </header>

   
    </>
  );
}
;

export default Header;
