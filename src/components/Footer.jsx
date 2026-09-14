import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Heenal Singh Chouhan</strong>. All rights reserved.
          </div>
          <div className="footer-credit">
            Designed & Built with <Heart size={14} /> in Udaipur, RJ, India.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
