import { CSSProperties } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import * as C from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { theme } from "../../theme";
import { Opinion } from "./opinionElement";
import { opinions } from "../../data/opinions";

export const Clientes = () => {
  let windowWidth = window.innerWidth;
  let showControlsCondition = windowWidth > 767 ? true : false;

  const feedBacksElements = opinions.map((opinion) => {
    return (
      <Opinion key={opinion.id} name={opinion.name} content={opinion.opinion} />
    );
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

  return (
    <C.Container>
      <h2>FEEDBACKS</h2>
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        interval={6000}
        showThumbs={false}
        showIndicators={windowWidth <= 768 ? false : true}
        showArrows={showControlsCondition}
        showStatus={false}
        swipeScrollTolerance={15}
        renderArrowPrev={(clickHandler: () => void, hasPrev) =>
          hasPrev && (
            <button onClick={clickHandler} style={{ ...arrowStyles, left: 0 }}>
              <ArrowBackIosIcon className="prev" />
            </button>
          )
        }
        renderArrowNext={(clickHandler: () => void, hasNext) =>
          hasNext && (
            <button onClick={clickHandler} style={{ ...arrowStyles, right: 0 }}>
              <ArrowForwardIosIcon className="next" />
            </button>
          )
        }
      >
        <div className="opinions ">
          {feedBacksElements.filter((feedback, idx) => idx < 1)}
        </div>
        <div className="opinions opinions__ml1">
          {feedBacksElements.filter((feedback, idx) => idx === 1)}
        </div>
        <div className="opinions opinions__ml1">
          {feedBacksElements.filter((feedback, idx) => idx === 2)}
        </div>
      </Carousel>
    </C.Container>
  );
};
