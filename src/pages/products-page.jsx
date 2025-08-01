import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../components/product-card";
import db, { cakes, category, treats } from "../assets/database";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <div className="page-products">
      <ul className="sub-list poppins-extralight">
        <li>
          <Link to="/products/bolos">BOLOS</Link>
        </li>
        <li>
          <Link to="/products/doces">DOCES</Link>
        </li>
      </ul>
      {props.product == null || props.product == "bolos" ? (
        <div className="product-category">
          <span className="category-title poppins-extralight">Tradicionais</span>
          <div className="product-list">
            {db.cakes
              .filter((cake) => cake.category == category.tradicional)
              .map((cake) => (
                <ProductCard title={"Bolos"} products={[cake]} />
              ))}
          </div>
          <span className="category-title poppins-extralight">Especiais</span>
          <div className="product-list">
            {db.cakes
              .filter((cake) => cake.category == category.special)
              .map((cake) => (
                <ProductCard title={"Bolos"} products={[cake]} />
              ))}
          </div>
        </div>
      ) : null}
      {props.product == "doces" ? (
        <div className="product-category">
          <span className="category-title poppins-extralight">Tradicionais</span>
          <div className="product-list">
            {db.treats
              .filter((treat) => treat.category == category.tradicional)
              .map((treat) => (
                <ProductCard title={"Doces"} products={[treat]} />
              ))}
          </div>
          <span className="category-title poppins-extralight">Gourmet</span>
          <div className="product-list">
            {db.treats
              .filter((treat) => treat.category == category.gourmet)
              .map((treat) => (
                <ProductCard title={"Doces"} products={[treat]} />
              ))}
          </div>
          <span className="category-title poppins-extralight">Premium</span>
          <div className="product-list">
            {db.treats
              .filter((treat) => treat.category == category.premium)
              .map((treat) => (
                <ProductCard title={"Doces"} products={[treat]} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Products;
