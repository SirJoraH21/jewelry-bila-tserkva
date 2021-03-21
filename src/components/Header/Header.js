import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="#" className="nav_link">
        <div className="logo">
          <img src="/images/JEWELRY.svg" alt="logo"/>
        </div>
      </a>
      <nav>
        <a href="#" className="nav_link">Home</a>
        <a href="#" className="nav_link">Shop</a>
        <a href="#" className="nav_link">About</a>
        <a href="#" className="nav_link">Blog</a>
        <a href="#" className="nav_link">Contacts</a>
      </nav>
    </header>
  );
}

export default Header;
