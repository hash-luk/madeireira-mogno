import React from "react";
import * as S from "./styles";

import { Eucatex } from "../../components/Brands/Eucatex";
import { Sudati } from "../../components/Brands/Sudati";
import { PCB } from "../../components/Brands/PCB";

import GlobalStyles from "../../styles/GlobalStyles";
import { WhatsAppButton } from "../../components/WhatsAPP-Float-Button";

function Products() {
  const $eucatex = document.querySelector(".eucatex");
  const $sudati = document.querySelector(".sudati");
  const $pcb = document.querySelector(".pcb");

  function displayEucatex() {
    $eucatex?.classList.add("show");
    $sudati?.classList.remove("show");
    $pcb?.classList.remove("show");

    console.log("Entrei aqui")
  }

  function displaySudati() {
    $eucatex?.classList.remove("show");
    $sudati?.classList.add("show");
    $pcb?.classList.remove("show");
    console.log("Entrei aqui")
  }

  function displayPCB() {
    $eucatex?.classList.remove("show");
    $sudati?.classList.remove("show");
    $pcb?.classList.add("show");
    console.log("Entrei aqui")
  }

  return (
    <S.Container>
      <WhatsAppButton />
      <div className="productsContent">
        <div id="line">
          <S.Bar>
            <h2>PRODUTOS</h2>
          </S.Bar>
        </div>
        <div className="buttonsContainer">
          <S.Button onClick={displaySudati}>SUDATI</S.Button>
          <S.Button onClick={displayEucatex}>EUCATEX</S.Button>
          <S.Button onClick={displayPCB}>PLACAS DO BRASIL</S.Button>
        </div>
        <div className="display">
          <PCB />
          <Eucatex />
          <Sudati />
        </div>
      </div>
      <GlobalStyles />
    </S.Container>
  );
}

export default Products;
