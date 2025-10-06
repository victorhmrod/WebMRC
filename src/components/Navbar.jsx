import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            Mendonça Rodrigues <span> Corretora</span>
          </a>
        </div>
        <button
          type="button"
          className="menu-btn d-lg-none"
          aria-label="Abrir menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
        <div
          className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a className="nav-link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a
                className="social-icon"
                href="https://www.instagram.com/mrcorretoraseg/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="social-icon"
                href="https://wa.me/5571991803612"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
