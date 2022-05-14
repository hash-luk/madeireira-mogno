import React from "react";
import * as S from "./styles";

import { Eucatex } from "../../components/Brands/Eucatex";
import { Sudati } from "../../components/Brands/Sudati";
import { PCB } from "../../components/Brands/PCB";

import GlobalStyles from "../../styles/GlobalStyles";
import { WhatsAppButton } from "../../components/WhatsAPP-Float-Button";

function Products() {
  function displayEucatex() {
    const $eucatex = document.querySelector(".eucatex") as HTMLDivElement;
    const $sudati = document.querySelector(".sudati") as HTMLDivElement;
    const $pcb = document.querySelector(".pcb") as HTMLDivElement;

    $eucatex.classList.add("show");
    $sudati.classList.remove("show");
    $pcb.classList.remove("show");
  }

  function displaySudati() {
    const $eucatex = document.querySelector(".eucatex") as HTMLDivElement;
    const $sudati = document.querySelector(".sudati") as HTMLDivElement;
    const $pcb = document.querySelector(".pcb") as HTMLDivElement;

    $eucatex.classList.remove("show");
    $sudati.classList.add("show");
    $pcb.classList.remove("show");
  }

  function displayPCB() {
    const $eucatex = document.querySelector(".eucatex") as HTMLDivElement;
    const $sudati = document.querySelector(".sudati") as HTMLDivElement;
    const $pcb = document.querySelector(".pcb") as HTMLDivElement;

    $eucatex.classList.remove("show");
    $sudati.classList.remove("show");
    $pcb.classList.add("show");
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
