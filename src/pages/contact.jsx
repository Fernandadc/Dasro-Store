import React, { useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFontAwesome, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y110tpr", "template_xmrgjwu", form.current, {
        publicKey: emailJsKey,
      })
      .then(
        () => {
          console.log("Enviado!");
          e.target.reset();
        },
        (error) => {
          console.log("Erro ao enviar email", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-link poppins-extralight">
        <span>
          Você pode entrar em contato diretamente através do instagram, facebook
          ou preencher o formulário!
        </span>
        <a href="https://mail.google.com/mail/u/0/">Email oficial<br></br>dasro@gmail.com</a>
        
        <a href="https://www.facebook.com/rosane.tortassobencomenda">
        <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        
        <a href="https://www.instagram.com/_dasro_/">
        <FontAwesomeIcon icon={faInstagram} /> Instagram 
        </a>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form poppins-extralight">
          
          <input className="poppins-regular" type="text" name="user_name" placeholder="Nome"/>
          
          <input className="poppins-regular" type="text" name="user_phone" placeholder="Telefone"/>
          
          <input className="poppins-regular" type="email" name="user_email" placeholder="Email"/>
          
          <textarea className="poppins-regular" name="message" placeholder="Mensagem" rows={5}/>
          <button type="submit" className="poppins-regular">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
