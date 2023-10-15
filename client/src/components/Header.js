// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Your Logo</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
