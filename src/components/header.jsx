import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import loc from "../assets/localization";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul className="container-menu poppins-regular">
        <li>
          <Link to="/">{loc.commonDasro}</Link>
        </li>
        <li >
          <Link to="/products">{loc.headerProducts}</Link>
        </li>
        <li>
          <Link to="/aboutus">{loc.headerAbout}</Link>
        </li>

        <li>
          <Link to="/contact">{loc.headerContact}</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
