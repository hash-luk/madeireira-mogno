import React from "react";

import * as C from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <C.Container>
      <div className="info">
        <div id="left">
          <div id="social">
            <div id="icons">
              <a href="https://www.instagram.com/madeireira_mogno/">
                <InstagramIcon className="icon" />
              </a>
              <a href="/"> </a>
              <FacebookIcon className="icon" />
            </div>
          </div>
          <C.Paragraph>
            <b>Telefone: </b>(31) 3397-9765
          </C.Paragraph>
          <C.Paragraph>
            <b>Email: </b>contatomadeireiramogno@gmail.com
          </C.Paragraph>
          <C.Paragraph>
            {" "}
            <b>Loja 1:</b> R. Doze, 42 - Inconfidentes, Contagem - MG, 32260-210
          </C.Paragraph>
          <C.Paragraph>
            {" "}
            <b>Loja 2:</b> R. José Gomes do Amaral, 72 - Vila Amaral, Betim -
            MG, 32603-090
          </C.Paragraph>
        </div>
        <div id="right">
          <a href="/">Início</a>
          <a href="/produtos">Produtos</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
          <p>
            © Copyright © 2021 Todos os direitos reservados à Madeireira Mogno
          </p>
        </div>
      </div>
    </C.Container>
  );
};
