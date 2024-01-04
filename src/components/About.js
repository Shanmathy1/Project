import React, { useState } from 'react';
import '../components/About.css';
function Web() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      {/* Your existing content */}

      {/* Add this section for the Coffee Website component */}
      <header>
        <nav className={`navbar ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
          <a className="logo" href="#">Freelance<span>.</span></a>
          <ul className="menu-links">
            <span id="close-menu-btn" className="material-symbols-outlined" onClick={toggleMobileMenu}>
              close
            </span>
            <li><a href="#">Hire</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <span id="hamburger-btn" className="material-symbols-outlined" onClick={toggleMobileMenu}>
            menu
          </span>
        </nav>
      </header>

      <section className="hero-section">
        <div className="content">
          <h2>Do the work you love, your way</h2>
          <p>
            We have several open projects where we are looking for talented
            developers to help train generative artificial intelligence models to write better code
          </p>
          <button>Hire Now</button>
        </div>
      </section>
    </div>
  );
}

export default Web;