import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";


function AboutUs() {
  return (
    <>
      <div className="aboutus">
        <div className="text-block poppins-extralight">
        <h2> A DASRO É O ENCONTRO PERFEITO ENTRE TRADIÇÃO E SOFISTICAÇÃO </h2>
        <span>
          Há mais de 20 anos, mãe e filha dedicam-se a criar doces artesanais e
          únicos, como nossas tortas elegantes e brigadeiros gourmet. Cada
          camada é feita com recheios generosos e ingredientes especiais,
          garantindo uma experiência de sabor inesquecível. Para quem
          busca o equilíbrio entre luxo e doçura, cada mordida na DasRo é um
          convite para o extraordinário! Perfeitas para ocasiões especiais ou
          para tornar qualquer momento mais doce e inesquecível, nossas criações
          são feitas para quem valoriza o luxo nos detalhes e a autenticidade no
          sabor. Venha saborear o melhor da confeitaria artesanal em Santa
          Maria! Deslize para ver todas as fotos e descubra o encanto de cada
          detalhe! Faça sua encomenda e descubra o sabor e sofisticação que só a
          DasRo pode oferecer!
        </span>
        </div>
        <img className="img-bio" src="src/assets/images/dasro.png" alt="" />
      </div>
    </>
  );
}

export default AboutUs;
