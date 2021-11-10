import React from "react";
import * as C from "./styles";
import produto01 from "../../assets/Produtos/prod01.jpeg";
import produto02 from "../../assets/Produtos/prod02.jpeg";
import produto03 from "../../assets/Produtos/prod03.jpeg";
import produto04 from "../../assets/Produtos/prod04.jpeg";
import produto05 from "../../assets/Produtos/prod05.jpeg";
import produto06 from "../../assets/Produtos/prod06.jpeg";
import produto07 from "../../assets/Produtos/prod07.jpeg";
import produto08 from "../../assets/Produtos/prod08.jpeg";
import produto09 from "../../assets/Produtos/prod09.jpg";
import produto10 from "../../assets/Produtos/prod10.jpg";
import produto11 from "../../assets/Produtos/prod11.jpg";
import produto12 from "../../assets/Produtos/prod12.jpg";

type Props = {
  produto: string;
};

export const Product = ({ produto }: Props) => {
  let image = {};
  let nome = ""

  if (produto === "Prod01") {
    image = produto01;
    nome = "Imbuia Terra"
  } else if (produto === "Prod02") {
    image = produto02;
    nome = "Nordico"
  } else if (produto === "Prod03") {
    image = produto03;
    nome = "Cinza Itália"
  } else if (produto === "Prod04") {
    image = produto04;
    nome = "Lâmina Dourada"
  } else if (produto === "Prod05") {
    image = produto05;
    nome = "Preto Tx"
  } else if (produto === "Prod06") {
    image = produto06;
    nome = "Imbuia"
  } else if (produto === "Prod07") {
    image = produto07;
    nome = "Louro Freijo"
  } else if (produto === "Prod08") {
    image = produto08;
    nome = "Tempranillo"
  } else if(produto === "Prod09") {
    image = produto09;
    nome = "Vitória Regia"
  } else if (produto === "Prod10") {
    image = produto10;
    nome = "Jacaranda"
  } else if (produto === "Prod11") {
    image = produto11;
    nome = "Pitanga"
  } else if (produto === "Prod12") {
    image = produto12;
    nome = "Castanha de Caju"
  }  else {
    image = produto01;
    nome = "Painél"
  }

  return (
    <C.Container>
      <div className="image">
        <img src={String(image)} alt="Produto" />
      </div>
      <div className="text">
        <p>{nome}</p>
      </div>
    </C.Container>
  );
};
