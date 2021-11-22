import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as C from "./styles";
import { Product } from "../ProductsCarrousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CSSProperties } from "@material-ui/styles";

export const Products = () => {

  let swidth = window.screen.width

  window.addEventListener('resize', () => {
    swidth = window.screen.width
    console.log(swidth)
  })



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
      <h3>Amostras</h3>
      <Carousel
        className="carousel"
        stopOnHover
        autoPlay
        infiniteLoop = {swidth <=1024 ? false : true}
        showIndicators = {swidth <=1024 ? false : true}
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
        <div className="productsDiv">
          <Product produto="Prod01" />
          <Product produto="Prod02" />
          <Product produto="Prod03" />
          <Product produto="Prod04" />
        </div>
        <div className="productsDiv">
          <Product produto="Prod05" />
          <Product produto="Prod06" />
          <Product produto="Prod07" />
          <Product produto="Prod08" />
        </div>
        <div className="productsDiv">
          <Product produto="Prod09" />
          <Product produto="Prod10" />
          <Product produto="Prod11" />
          <Product produto="Prod12" />
        </div>
      </Carousel>
      <div className="responsive">
        <Product produto="Prod01"/>
        <Product produto="Prod05"/>
        <Product produto="Prod09"/>
      </div>
    </C.Container>
  );
};
