import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
        <h1>
          ALISHBA<span className="dot">.</span>
        </h1>
      </div>
      <ul className="footer-links">
        {navItems.map((item) => (
          <li key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="footer-social">
        <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
      </div>
      <div className="copyright">
        © 2026 <span className="highlight">Alishba</span> All Rights Reserved, Inc.
      </div>
    </footer>
  );
};

export default Footer;