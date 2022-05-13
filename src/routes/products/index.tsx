import React,{useState} from "react"
import * as S from "./styles";

import { Eucatex } from "../../components/Brands/Eucatex";
import { Sudati } from "../../components/Brands/Sudati";
import { PCB } from "../../components/Brands/PCB";

import GlobalStyles from "../../styles/GlobalStyles";
import { WhatsAppButton } from '../../components/WhatsAPP-Float-Button';

function Products() {
  return (
    <S.Container>
      <WhatsAppButton />
      <div className="prductsContent">
        <div id="line">
          <S.Bar>
            <h2>PRODUTOS</h2>
          </S.Bar>
        </div>
        <div className="buttonsContainer">
          <S.Button>SUDATI</S.Button>
          <S.Button>EUCATEX</S.Button>
          <S.Button>PLACAS DO BRASIL</S.Button>
        </div>
      </div>
      <GlobalStyles />
    </S.Container>
  );
}

export default Products;
