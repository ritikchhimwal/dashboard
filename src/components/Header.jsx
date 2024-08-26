import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">LOGO
          </a>

          <ul className="nav">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">Dashboard</a></li>
            <li><a href="#" className="nav-link">Pricing</a></li>
            <li><a href="#" className="nav-link">FAQs</a></li>
            <li><a href="#" className="nav-link">About</a></li>
          </ul>

          <form className="search-form" role="search">
            <input type="search" className="search-input" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="auth-buttons">
            <button type="button" className="btn login-btn">Login</button>
            <button type="button" className="btn signup-btn">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
