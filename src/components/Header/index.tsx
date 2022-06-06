import * as C from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export const Header = () => {
  function handleMenu() {
    const links = document.getElementById("links") as HTMLDivElement;
    if (links?.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

  const variants = {
    init: {
      opacity: 0,
      y: -200,
    },
    onScreen: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <C.Container>
      <div className="logo">
        <div>M</div>
        <div>M</div>
      </div>
      <div id="links">
        <div>
          <C.ALinks><Link to="/">INICIO</Link> </C.ALinks>
          <C.ALinks><Link to="produtos">PRODUTOS</Link></C.ALinks>
          <C.ALinks><Link to="contato">CONTATO</Link></C.ALinks>
          <C.ALinks><Link to="sobre">SOBRE</Link></C.ALinks>
        </div>
      </div>
      <div className="menu">
        <C.AnimateButton
          id="home"
          variants={variants}
          animate={"onScreen"}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.2 }}
          initial={"init"}
          value="INICIO"
        >
          <Link to="/">INICIO</Link>
        </C.AnimateButton>

        <C.AnimateButton
          id="products"
          variants={variants}
          animate={"onScreen"}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.4 }}
          initial={"init"}
          value="PRODUTOS"
        >
          <Link to="produtos">PRODUTOS</Link>
        </C.AnimateButton>
        <C.AnimateButton
          id="contact"
          variants={variants}
          animate={"onScreen"}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.6 }}
          initial={"init"}
          value="CONTATO"
        >
          <Link to="contato">CONTATO</Link>
        </C.AnimateButton>
        <C.AnimateButton
          id="about"
          variants={variants}
          animate={"onScreen"}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.8 }}
          initial={"init"}
          value="SOBRE"
        >
          <Link to="sobre">SOBRE</Link>
        </C.AnimateButton>
      </div>
      <button className="icon" onClick={handleMenu}>
        <MenuIcon className="image" />
      </button>
    </C.Container>
  );
};
