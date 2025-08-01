import React from "react";

const category = {
  tradicional: 0,
  special: 1,
  gourmet: 2,
  premium: 3,
};

const cakes = {
  anne: 0,
  diamanteNegro: 1,
  macron: 2,
  moca: 3,
  morango: 4,
  negra: 5,
  ouroBrancoMousse: 6,
  pretaBranca: 7,
  stikadinho: 8,
  martaRocha: 9,
  martaRochaAbacaxi: 10,
  manjarDosDeuses: 11,
  nutella: 12,
  oreo: 13,
};
const treats = {
  brigadeiro: 0,
  amendoim: 1,
  beijinho: 2,
  bichoDePe: 3,
  branquinho: 4,
  cafe: 5,
  brigadeiroGourmet: 6,
  casadinhoNinhoBrigadeiro: 7,
  casadinhoNinhoBicho: 8,
  churros: 9,
  ferrero: 10,
  limao: 11,
  maracuja: 12,
  ninhoNutella: 13,
  nozes: 14,
  olhoDeSogra: 15,
  prestigio: 16,
  sensacao: 17,
  brulle: 18,
  chocolateBranco: 19,
  confete: 20,
  kinder: 21,
  meioAmargo: 22,
  redVelvet: 23,
  stikadinho: 24,
};
// Database seguindo padrão SQL com index de acesso para cada item
const db = {
  cakes: [
    {
      name: "Anne",
      description:
        "Leite moça cozido, coco ralado natural, ameixa e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/anne.jpg",
    },
    {
      name: "Diamante Negro",
      description:
        "Brigadeiro, creme de leite condensado branco, mousse de chocolate, chocolate diamante negro e chantilly",
      category: category.tradicional,
      image: "/src/assets/images/diamante_negro.jpeg",
    },
    {
      name: "Macron",
      description: "Massa de coco queimado, ovos moles, ameixa e fios de ovos",
      category: category.tradicional,
      image: "/src/assets/images/macron.jpeg",
    },
    {
      name: "Moça",
      description:
        "Leite moça cozido, creme de leite condensado com chocolate, mousse de chocolate, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/moça.jpeg",
    },
    {
      name: "Morango",
      description:
        "Brigadeiro ou branquinho, disco de merengue, morangos, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/morango.jpeg",
    },
    {
      name: "Negra",
      description:
        "Brigadeiro, creme de leite condensado com chocolate, mousse de chocolate, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/negra.jpeg",
    },
    {
      name: "Ouro Branco com mousse",
      description:
        "Creme de leite condensado, creme de leite condensado com chocolate, mousse de chocolate, bombom ouro branco e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/ouro_branco.jpg",
    },
    {
      name: "Preta e Branca",
      description:
        "Brigadeiro, branquinho, mousse de chocolate, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/preta_e_branca.jpeg",
    },
    {
      name: "Stikadinho",
      description:
        "Brigadeiro, brigadeiro de quick, mousse de chocolate, chocolate stikadinho e chantilly.",
      category: category.tradicional,
      image: "/src/assets/images/stikadinho.jpeg",
    },
    {
      name: "Marta Rocha Tradicional",
      description:
        "Leite condensado, ovos moles, nozes, disco de merengue e chantilly.",
      category: category.special,
      image: "/src/assets/images/marta_rocha_tradicional.jpeg",
    },
    {
      name: "Marta Rocha com Abacaxi",
      description:
        "Leite condensado, ovos moles, nozes, abacaxi, disco de merengue e chantilly.",
      category: category.special,
      image: "/src/assets/images/marta_rocha_abacaxi.jpeg",
    },
    {
      name: "Manjar dos Deuses",
      description:
        "Leite condensado, ovos moles, nozes, ameixa, disco de merengue e chantilly.",
      category: category.special,
      image: "/src/assets/images/manjar_dos_deuses.jpg",
    },
    {
      name: "Nutella",
      description:
        "Leite condensado com amendoim, mousse de chocolate, nutella e chantilly.",
      category: category.special,
      image: "/src/assets/images/nutella.jpeg",
    },
    {
      name: "Oreo",
      description:
        "Leite condensado cozido, mousse de chocolate, chantilly com leite condensado e biscoito oreo, raspas de chocolate e nozes.",
      category: category.special,
      image: "/src/assets/images/oreo.jpeg",
    },
  ],
  treats: [
    {
      name: "Brigadeiro",
      category: category.tradicional,
      image: "/src/assets/images/brigadeiro.jpg",
    },
    {
      name: "Amendoim",
      category: category.tradicional,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Beijinho",
      category: category.tradicional,
      image: "/src/assets/images/beijinho.jpg",
    },
    {
      name: "Bicho de pé",
      category: category.tradicional,
      image: "/src/assets/images/bicho_de_pe.jpg",
    },
    {
      name: "Branquinho",
      category: category.tradicional,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Café",
      category: category.tradicional,
      image: "/src/assets/images/cafe.jpg",
    },
    {
      name: "Brigadeiro Gourmet",
      category: category.gourmet,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Casadinho Ninho e Brigadeiro",
      category: category.gourmet,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Casadinho Ninho e Bicho de pé",
      category: category.gourmet,
      image: "/src/assets/images/casadinho_ninho_bichodepe.jpg",
    },
    {
      name: "Churros",
      category: category.gourmet,
      image: "/src/assets/images/churros.jpg",
    },
    {
      name: "Ferrero",
      category: category.gourmet,
      image: "/src/assets/images/ferrero.jpg",
    },
    {
      name: "Limão",
      category: category.gourmet,
      image: "/src/assets/images/limao.jpg",
    },
    {
      name: "Maracujá",
      category: category.gourmet,
      image: "/src/assets/images/maracuja.jpg",
    },
    {
      name: "Ninho com Nutella",
      category: category.gourmet,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Nozes",
      category: category.gourmet,
      image: "/src/assets/images/nozes.jpg",
    },
    {
      name: "Olho de Sogra",
      category: category.gourmet,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Prestígio",
      category: category.gourmet,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Sensação",
      category: category.gourmet,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Brullé",
      category: category.premium,
      image: "/src/assets/images/brule.jpg",
    },
    {
      name: "Chocolate Branco",
      category: category.premium,
      image: "/src/assets/images/chocolate_branco.jpg",
    },
    {
      name: "Confete",
      category: category.premium,
      image: "/src/assets/images/confeti.jpg",
    },
    {
      name: "Kinder",
      category: category.premium,
      image: "/src/assets/images/kinder.jpg",
    },
    {
      name: "Meio Amargo",
      category: category.premium,
      image: "/src/assets/images/prov.jpg",
    },
    {
      name: "Red Velvet",
      category: category.premium,
      image: "/src/assets/images/red_velvet.jpg",
    },
    {
      name: "Stikadinho",
      category: category.premium,
      image: "/src/assets/images/stikadinho_doce.jpg",
    },
  ],
};

export default db;
export { treats, cakes, category};
