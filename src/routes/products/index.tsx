import * as C from "./styles";
import { pcb, sudati, eucatex } from "../../data/woods";

import GlobalStyles from "../../styles/GlobalStyles";
import { Header } from "../../components/Header";

function Products() {
  function showSudati() {
    const $sudatidiv = document.querySelector(".sudati") as HTMLDivElement;
    const $eucatexdiv = document.querySelector(".eucatex") as HTMLDivElement;
    const $pcbdiv = document.querySelector(".pcb") as HTMLDivElement;

    $sudatidiv.style.display = "flex";
    $eucatexdiv.style.display = "none";
    $pcbdiv.style.display = "none";
  }

  function showEucatex() {
    const $sudatidiv = document.querySelector(".sudati") as HTMLDivElement;
    const $eucatexdiv = document.querySelector(".eucatex") as HTMLDivElement;
    const $pcbdiv = document.querySelector(".pcb") as HTMLDivElement;

    $sudatidiv.style.display = "none";
    $eucatexdiv.style.display = "flex";
    $pcbdiv.style.display = "none";
  }

  function showPCB() {
    const $sudatidiv = document.querySelector(".sudati") as HTMLDivElement;
    const $eucatexdiv = document.querySelector(".eucatex") as HTMLDivElement;
    const $pcbdiv = document.querySelector(".pcb") as HTMLDivElement;

    $sudatidiv.style.display = "none";
    $eucatexdiv.style.display = "none";
    $pcbdiv.style.display = "flex";
  }

  return (
    <C.Container>
      <Header />
      <div className="prductsContent">
        <div id="line">
          <C.Bar>
            <h2>PRODUTOS</h2>
          </C.Bar>
        </div>
        <div className="buttonsContainer">
          <C.Button onClick={showSudati}>SUDATI</C.Button>
          <C.Button onClick={showEucatex}>EUCATEX</C.Button>
          <C.Button onClick={showPCB}>PLACAS DO BRASIL</C.Button>
        </div>
        <div className="sudati">
          {sudati.map((product) => (
            <C.ProductBox key={product.id}>
              {product.name} <img src={product.image} alt="" />
            </C.ProductBox>
          ))}
        </div>
        <div className="eucatex">
          {eucatex.map((product) => (
            <C.ProductBox key={product.id}>
              {product.name} <img src={product.image} alt="" />
            </C.ProductBox>
          ))}
        </div>
        <div className="pcb">
          {pcb.map((product) => (
            <C.ProductBox key={product.id}>
              {product.name} <img src={product.image} alt="" />
            </C.ProductBox>
          ))}
        </div>
      </div>
      <GlobalStyles />
    </C.Container>
  );
}

export default Products;
