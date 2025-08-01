import React from "react";
import loc from "../assets/localization";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container-header">
      <div className="header-content">
        {/* Logo/Link principal - sempre visível */}
        <Link to="/" className="logo-link poppins-regular">
          {loc.commonDasro}
        </Link>

        {/* Botão do menu hamburguer (visível apenas em mobile) */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Itens do menu (exceto o primeiro) */}
        <ul className={`nav-menu poppins-regular ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/products">{loc.headerProducts}</Link>
          </li>
          <li>
            <Link to="/aboutus">{loc.headerAbout}</Link>
          </li>
          <li>
            <Link to="/contact">{loc.headerContact}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;