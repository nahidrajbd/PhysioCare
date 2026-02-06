import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Physio<span className="text-primary">Care</span> BD
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm">Get Quote</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: var(--shadow-sm);
          padding: 1rem 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-dark);
        }
        .text-primary {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          color: var(--secondary);
          transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }
        .mobile-toggle {
          display: none;
          color: var(--text-dark);
        }
        .mobile-menu {
          background: var(--white);
          border-top: 1px solid #eee;
          overflow: hidden;
        }
        .mobile-link {
          display: block;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          font-weight: 500;
        }
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-logo">Physio<span>Care</span> BD</h3>
          <p className="footer-desc">
            Reliable physiotherapy equipment supplier in Bangladesh.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/shipping-info">Shipping Information</Link></li>
            <li><Link to="/return-policy">Return & Refund</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul className="footer-contact">
            <li><Mail size={16} /> <a href="mailto:sales@physiocarebdplus.com" className="contact-link">sales@physiocarebdplus.com</a></li>
            <li><Phone size={16} /> +880 1700 000000</li>
            <li><MapPin size={16} /> Dhaka, Bangladesh</li>
          </ul>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PhysioCare BD. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background: #1e293b;
          color: #cbd5e1;
          padding: 4rem 0 1rem;
        }
        .footer-logo {
          color: var(--white);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-logo span {
          color: var(--primary);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-desc {
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        h4 {
          color: var(--white);
          margin-bottom: 1.25rem;
          font-size: 1.1rem;
        }
        .footer-links, .footer-contact {
          list-style: none;
        }
        .footer-links li, .footer-contact li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: var(--primary);
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .contact-link {
          color: inherit;
          transition: color 0.3s;
        }
        .contact-link:hover {
          color: var(--primary);
        }
        .social-links {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          color: var(--white);
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
