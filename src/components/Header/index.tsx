import { Link } from "react-router-dom";
import * as C from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  function handleMenu() {
    const links = document.getElementById("links") as HTMLDivElement;
    if (links?.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

  function home() {
    window.location.href = "/";
  }

  function products() {
    window.location.href = "/produtos";
  }

  function about() {
    window.location.href = "/sobre";
  }

  function contact() {
    window.location.href = "/contato";
  }

  return (
    <C.Container>
      <div className="logo">
        <div>M</div>
        <div>M</div>
      </div>
      <div id="links">
        <div>
          <C.ALinks onClick={home}>INICIO</C.ALinks>
          <C.ALinks onClick={products}>PRODUTOS</C.ALinks>
          <C.ALinks onClick={contact}>CONTATO</C.ALinks>
          <C.ALinks onClick={about}>SOBRE</C.ALinks>
        </div>
      </div>
      <div className="menu">
        <button id="home" onClick={home} value="INICIO">
          INICIO
        </button>
        <button id="products" onClick={products} value="PRODUTOS">
          PRODUTOS
        </button>
        <button id="contact" onClick={contact} value="CONTATO">
          CONTATO
        </button>
        <button id="about" onClick={about} value="SOBRE">
          SOBRE
        </button>
      </div>
      <a href="#" className="icon" onClick={handleMenu}>
        <MenuIcon className="image" />
      </a>
    </C.Container>
  );
};
