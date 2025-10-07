import React from 'react'; 
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className="app-header">
        <div className="header-container">
          <h1 className="header-logo">Printify</h1>
          <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="header-actions">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Link to="/profile" className="profile">
              <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link to="/wishlist" className="heart">
              <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link to="/cart" className="cart">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="header-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        .app-header {
          font-family: 'Poppins', Arial, sans-serif;
          background-color: #2C3E50;
          color: #FFFFFF;
          padding: 1rem 1.5rem;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo {
          font-size: 1.75rem;
          font-weight: bold;
          font-family: serif;
        }
        .header-nav {
          display: flex;
          gap: 1.5rem;
        }
        .header-nav a {
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s ease-in-out;
        }
        .header-nav a:hover {
          opacity: 0.8;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .search-container {
          display: flex;
          position: relative;
        }
        .search-input {
          padding: 0.5rem 0.75rem 0.5rem 2.5rem;
          border-radius: 9999px;
          border: 1px solid #ccc;
          background-color: #FFFFFF;
          color: #333;
          outline: none;
          transition: border-color 0.2s ease-in-out;
        }
        .search-input:focus {
          border-color: #5bc0de;
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.25rem;
          height: 1.25rem;
          color: #9CA3AF;
        }
        .header-actions a {
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .header-actions a.profile:hover,
        .header-actions a.cart:hover {
          background-color: #FFFFFF;
          color: #2C3E50;
        }
        .header-actions a.heart:hover .header-icon {
          fill: #FFFFFF;
          stroke: #FFFFFF;
        }
        .header-actions a.cart .header-icon,
        .header-actions a.profile .header-icon,
        .header-actions a.heart .header-icon {
          width: 1.4rem;
          height: 1.4rem;
          stroke-width: 2;
          transition: stroke 0.3s ease, fill 0.3s ease;
        }
        .header-icon {
          width: 1.4rem;
          height: 1.4rem;
          stroke-width: 2;
        }
      `}</style>
    </>
  );
};

export default Header;
