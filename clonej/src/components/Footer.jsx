import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>Shynora</h3>
          <p>
            Timeless jewellery crafted to celebrate your most beautiful
            moments.
          </p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <Link to="/collection">All Jewellery</Link>
          <Link to="/necklace">Necklaces</Link>
          <Link to="/ring">Rings</Link>
          <Link to="/earrings">Earrings</Link>
          <Link to="/bracelet">Bracelets</Link>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/my-orders">My Orders</Link>
        </div>

        <div className="footer-contact">
          <h4>Stay Connected</h4>
          <p>Discover new arrivals, collections and jewellery inspiration.</p>

          <div className="footer-email">
            <span>hello@shynora.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Shynora. All Rights Reserved.</p>

        <span>Crafted with elegance ♡</span>
      </div>
    </footer>
  );
};

export default Footer;