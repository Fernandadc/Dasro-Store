import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFontAwesome, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <div className="container-footer">
      <span className="poppins-extralight">© 2024 Dasro, Inc</span>
      <a href="">
        <img src="/src/assets/images/dasro-icon.png" alt="" />
      </a>
      <div className="social-media">
      <a href="">
        <FontAwesomeIcon icon={faWhatsapp}/>
      </a>
      <a href="https://www.facebook.com/rosane.tortassobencomenda">
      <FontAwesomeIcon icon={faFacebook}/></a>
      <a href="https://www.instagram.com/_dasro_/">
      <FontAwesomeIcon icon={faInstagram}/></a>
      </div>
    </div>
  );
}

export default Footer;
