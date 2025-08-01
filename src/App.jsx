import React from "react";
import "./assets/scss/App.scss";
import { Router, Route, Routes, useNavigate } from "react-router-dom";
import db, { cakes } from "./assets/database";
import loc from "./assets/localization";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductBalloon from "./components/product-balloon";
import ProductCard from "./components/product-card";
import TextImgBlock from "./components/text-img-block";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about-us";

import Contact from "./pages/contact";
import Products from "./pages/products-page";
/* alternar entre bolos e doces no product card 
    tirar a bolinha debaixo dos produtos
    colocar o= descricao e icone info nos produtos*/
function App(props) {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/bolos" element={<Products product="bolos"/>}></Route>
        <Route path="/products/doces" element={<Products product="doces"/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
