import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as C from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CSSProperties } from "styled-components";

export const Clientes = () => {

  let windowWidth = window.innerWidth
  let showControlsCondition = windowWidth > 767 ? true : false

  console.log(windowWidth , showControlsCondition)

  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "#FFF",
  };

  return (
    <C.Container>
      <h2>FEEDBACKS</h2>

      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        showIndicators = {windowWidth <= 768 ? false : true}
        showArrows={showControlsCondition}
        showStatus={false}
        swipeScrollTolerance={15}
        renderArrowPrev={(clickHandler: () => void, hasPrev, labelPrev) =>
          hasPrev && (
            <button onClick={clickHandler} style={{ ...arrowStyles, left: 0 }}>
              <ArrowBackIosIcon className="prev" />
            </button>
          )
        }
        renderArrowNext={(clickHandler: () => void, hasNext, labelNext) =>
          hasNext && (
            <button onClick={clickHandler} style={{ ...arrowStyles, right: 0 }}>
              <ArrowForwardIosIcon className="next" />
            </button>
          )
        }
      >
        <div className="opinions ">
          <p>Daniel Dutra</p>
          <div id="line"></div>
          <p>
            Melhor madeireira de Minas Gerais!
            Os vendedores atendem muito bem!
            A melhor no preço!
          </p>
        </div> 
        <div className="opinions opinions__ml1">
          <p>Alef Silva</p>
          <div id="line"></div>
          <p>
            Qualidade, preço justo, prazo adequado e atendimento excelente!
          </p>
        </div>
        <div className="opinions opinions__ml1">
          <p>Nome</p>
          <div id="line"></div>
          <p>
            Toda equipe de atendimento muito atenciosa e dedicada, com ferragens de qualidade e o mais importante preço bom, vale a pena conferir. Parabéns a toda equipe da Madeireira Mogno!
          </p>
        </div>
      </Carousel>
    </C.Container>
  );
};
