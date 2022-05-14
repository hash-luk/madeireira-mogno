import React,{useState} from "react";
import * as S from "./styles";

import { Eucatex } from "../../components/Brands/Eucatex";
import { Sudati } from "../../components/Brands/Sudati";
import { PCB } from "../../components/Brands/PCB";

import GlobalStyles from "../../styles/GlobalStyles";
import { WhatsAppButton } from "../../components/WhatsAPP-Float-Button";

function Products() {
  const [selectedButton, setSelectedButton] = useState("sudati");


  function displayEucatex(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const $eucatex = document.querySelector(".eucatex") as HTMLDivElement;
    const $sudati = document.querySelector(".sudati") as HTMLDivElement;
    const $pcb = document.querySelector(".pcb") as HTMLDivElement;

    $eucatex.classList.add("show");
    $sudati.classList.remove("show");
    $pcb.classList.remove("show");

    setSelectedButton(e.currentTarget.id)
  }

  function displaySudati(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const $eucatex = document.querySelector(".eucatex") as HTMLDivElement;
    const $sudati = document.querySelector(".sudati") as HTMLDivElement;
    const $pcb = document.querySelector(".pcb") as HTMLDivElement;

    $eucatex.classList.remove("show");
    $sudati.classList.add("show");
    $pcb.classList.remove("show");

    setSelectedButton(e.currentTarget.id)
  }

  function displayPCB(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const $eucatex = document.querySelector(".eucatex") as HTMLDivElement;
    const $sudati = document.querySelector(".sudati") as HTMLDivElement;
    const $pcb = document.querySelector(".pcb") as HTMLDivElement;

    $eucatex.classList.remove("show");
    $sudati.classList.remove("show");
    $pcb.classList.add("show");

    setSelectedButton(e.currentTarget.id)
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
          <S.Button onClick={(e) => displaySudati(e)} className={selectedButton === 'sudati' ? 'selected' : ''} id="sudati">SUDATI</S.Button>
          <S.Button onClick={(e) => displayEucatex(e)} className={selectedButton === 'eucatex' ? 'selected' : ''} id="eucatex">EUCATEX</S.Button>
          <S.Button onClick={(e) => displayPCB(e)} className={selectedButton === 'pcb' ? 'selected' : ''} id="pcb">PLACAS DO BRASIL</S.Button>
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
