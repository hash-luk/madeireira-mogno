import { Carousel } from "react-responsive-carousel";
import { Product } from "../ProductsCarrousel";
import { CSSProperties } from "@material-ui/styles";
import { products } from "../../data/products";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as C from "./styles";

import { theme } from "../../theme";

export const Products = () => {
  let swidth = window.screen.width;

  window.addEventListener("resize", () => {
    swidth = window.screen.width;
  });

  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    background: "none",
    border: "none",
    color: theme.colors.white,
  };

  const productsComponents = products.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        altText={product.altText}
        imageURL={product.imageURL}
      />
    );
  });

  return (
    <C.Container>
      <h2>AMOSTRAS</h2>
      <Carousel
        showThumbs={false}
        className="carousel"
        stopOnHover
        autoPlay
        interval={4300}
        infiniteLoop={swidth <= 1024 ? false : true}
        showIndicators={swidth <= 1024 ? false : true}
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
          {productsComponents.filter((product, idx) => idx < 3)}
        </div>
        <div className="productsDiv">
          {productsComponents.filter((product, idx) => idx > 3 && idx < 7)}
        </div>
        <div className="productsDiv">
          {productsComponents.filter((product, idx) => idx > 7 && idx < 11)}
        </div>
      </Carousel>
      <div className="responsive">
        {productsComponents.filter((product, idx) => idx < 3)}
      </div>
    </C.Container>
  );
};
