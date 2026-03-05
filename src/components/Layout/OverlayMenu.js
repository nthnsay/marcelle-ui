import React from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import logoFavicon from '../../assets/images/Logos/logo favicon_navy.svg';
import './OverlayMenu.css';

const OverlayMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const content = (
    <aside
      id="site-drawer"
      className={`drawer ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close" aria-label="Close menu" onClick={onClose}>×</button>
        <div className="drawer-col left">
          <h2 className="drawer-title">Our Studio</h2>
          <nav className="drawer-nav" aria-label="Studio">
            <ul className="drawer-links">
              <li>
                <Link to="/about" onClick={onClose} className={isActive('/about') ? 'active' : ''}>About</Link>
              </li>
              <li>
                <Link to="/beginners" onClick={onClose} className={isActive('/beginners') ? 'active' : ''}>Beginners</Link>
              </li>
              <li>
              <Link to="/classes" onClick={onClose} className={isActive('/classes') ? 'active' : ''}>Classes</Link>
            </li>
              <li>
                <Link to="/schedule" onClick={onClose} className={isActive('/schedule') ? 'active' : ''}>Schedule</Link>
              </li>
              <li>
                <Link to="/events" onClick={onClose} className={isActive('/events') ? 'active' : ''}>Events</Link>
              </li>
              <li>
                <Link to="/membership" onClick={onClose} className={isActive('/membership') ? 'active' : ''}>Join Our Membership</Link>
              </li>
              <li>
                <Link to="/rental" onClick={onClose} className={isActive('/rental') ? 'active' : ''}>Studio Rental</Link>
              </li>
            
            </ul>
          </nav>
        </div>
        <img src={logoFavicon} className="drawer-image" alt="Marcelle Studios Logo" onClick={onClose} />
      </div>
    </aside>
  );

  // Render to body to escape header stacking context
  const mount = typeof document !== 'undefined' ? document.body : null;
  return mount ? createPortal(content, mount) : content;
};

export default OverlayMenu;



