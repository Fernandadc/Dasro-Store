import React from "react";
import db, { cakes } from "../assets/database";
import ProductBalloon from "../components/product-balloon";
import ProductCard from "../components/product-card";
import TextImgBlock from "../components/text-img-block";

function Homepage(props) {
  return (
    <>
      <div className="page-home">
        <div className="featured">
          <div>
            <ProductCard
              title={"Bolos"}
              products={[
                db.cakes[cakes.anne],
                db.cakes[cakes.diamanteNegro],
                db.cakes[cakes.macron],
              ]}
            />
            <ProductBalloon />
          </div>
          <div>
            <ProductCard
              title={"Bolos"}
              products={[
                db.cakes[cakes.anne],
                db.cakes[cakes.diamanteNegro],
                db.cakes[cakes.macron],
              ]}
            />
            <ProductBalloon />
          </div>
          <div>
            <ProductBalloon inverted={true} />
            <ProductCard
              title={"Bolos"}
              products={[
                db.cakes[cakes.anne],
                db.cakes[cakes.diamanteNegro],
                db.cakes[cakes.macron],
              ]}
            />
          </div>
        </div>
        <TextImgBlock />
        <div className="featured">
          <div>
            <ProductCard
              title={"Bolos"}
              products={[
                db.cakes[cakes.anne],
                db.cakes[cakes.diamanteNegro],
                db.cakes[cakes.macron],
              ]}
            />
          </div>
          <div>
            <ProductCard
              title={"Bolos"}
              products={[
                db.cakes[cakes.anne],
                db.cakes[cakes.diamanteNegro],
                db.cakes[cakes.macron],
              ]}
            />
          </div>
          <div>
            <ProductCard
              title={"Bolos"}
              products={[
                db.cakes[cakes.anne],
                db.cakes[cakes.diamanteNegro],
                db.cakes[cakes.macron],
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
