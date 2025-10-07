import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="app-footer">
        <div className="footer-container">
          
          {/* About Section */}
          <div className="footer-column about">
            <h4>Printify</h4>
            <p>
              Printify offers premium apparel and accessories with quality you can trust.
              Every item is crafted with care, blending style, comfort, and durability.
              Shop with confidence and elevate your everyday look.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="footer-column links">
            <h4>Support</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
            </ul>
          </div>

          {/* Address + Social Media */}
          <div className="footer-column address">
            <h4>Address</h4>
            <p>Sonigara Landmark, Chatrapati Chowk Rd, Wakad, Pune 411057</p>
            <br />
            <div className="footer-socials">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="whatsapp">
    <i className="fab fa-whatsapp"></i>
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
    <i className="fab fa-instagram"></i>
  </a>
</div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>All rights reserved by &copy; Printify {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Inline CSS */}
      <style>{`
        .app-footer {
          background-color: #2C3E50;
          color: #FFFFFF;
          padding: 50px 0 20px 0;
          font-family: 'Poppins', Arial, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .footer-column h4 {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #FFFFFF;
        }

        .footer-column.about p {
          font-size: 13px;
          line-height: 1.6;
          color: #f1ebeb;
          margin-bottom: 20px;
        }

        .footer-socials {
          display: flex;
          gap: 15px;
        }

        .footer-socials a {
          color: #FFFFFF;
          background-color: #3a506b;
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 22px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .footer-socials a:hover {
          color: #2C3E50;
          background-color: #fff;
          transform: translateY(-3px);
        }

        .footer-column.links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column.links li {
          margin-bottom: 12px;
        }

        .footer-column.links a {
          color: #f1ebeb;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-column.links a:hover {
          color: #3a92ea;
        }

        .footer-column.address p {
          color: #f1ebeb;
          line-height: 1.7;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #3a506b;
          font-size: 0.9rem;
          color: #f1ebeb;
        }
          .footer-socials button {
  background-color: #3a506b;
  color: #fff;
  border: none;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.footer-socials button:hover {
  color: #2C3E50;
  background-color: #fff;
  transform: translateY(-3px);
}

      `}</style>
    </>
  );
};

export default Footer;
