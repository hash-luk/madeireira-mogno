import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as C from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CSSProperties } from "styled-components";

export const Clientes = () => {
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
        <div id="opinions">
          <p>Nome</p>
          <div id="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
            laoreet arcu. Pellentesque et ornare augue, ac varius arcu. Aenean
            fringilla ultrices nibh at scelerisque. Vivamus orci urna, mollis a
            mauris eu, scelerisque convallis lacus. Sed pretium lorem felis, nec
            porta ipsum suscipit in. Vivamus pulvinar ultricies tortor, vitae
            molestie felis commodo non. Curabitur iaculis fringilla justo,
            ultricies aliquam mauris vestibulum sit amet.
          </p>
        </div>
        <div id="opinions">
          <p>Nome</p>
          <div id="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
            laoreet arcu. Pellentesque et ornare augue, ac varius arcu. Aenean
            fringilla ultrices nibh at scelerisque. Vivamus orci urna, mollis a
            mauris eu, scelerisque convallis lacus. Sed pretium lorem felis, nec
            porta ipsum suscipit in. Vivamus pulvinar ultricies tortor, vitae
            molestie felis commodo non. Curabitur iaculis fringilla justo,
            ultricies aliquam mauris vestibulum sit amet.
          </p>
        </div>
        <div id="opinions">
          <p>Nome</p>
          <div id="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
            laoreet arcu. Pellentesque et ornare augue, ac varius arcu. Aenean
            fringilla ultrices nibh at scelerisque. Vivamus orci urna, mollis a
            mauris eu, scelerisque convallis lacus. Sed pretium lorem felis, nec
            porta ipsum suscipit in. Vivamus pulvinar ultricies tortor, vitae
            molestie felis commodo non. Curabitur iaculis fringilla justo,
            ultricies aliquam mauris vestibulum sit amet.
          </p>
        </div>
      </Carousel>
    </C.Container>
  );
};
