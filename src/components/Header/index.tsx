import * as C from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useAnimation } from "framer-motion";

export const Header = () => {
  const controls = useAnimation();
  const pageURL = window.location.href;
  let initialMenuState = {
    transform: "translateY(-200px)",
    opacity:0
  }

  const sequence = async() => {
    await controls.start({y: -200,opacity:0});
    return  controls.start({y:0,opacity:1});
  }
  console.log(pageURL);

  if(pageURL === "http://localhost:3000/"){
    sequence();
  } else {
    initialMenuState = {
      transform: "translateY(0px)",
      opacity:1
    }
  }

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
      <div className="logo" onClick={home}>
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
        <C.AnimateButton
          id="home"
          animate={controls}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.2 }}
          initial={initialMenuState}
          onClick={home}
          value="INICIO"
        >
          INICIO
        </C.AnimateButton>
        <C.AnimateButton
          id="products"
          animate={controls}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.4 }}
          initial={initialMenuState}
          onClick={products}
          value="PRODUTOS"
        >
          PRODUTOS
        </C.AnimateButton>
        <C.AnimateButton
          id="contact"
          animate={controls}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.6 }}
          initial={initialMenuState}
          onClick={contact}
          value="CONTATO"
        >
          CONTATO
        </C.AnimateButton>
        <C.AnimateButton
          id="about"
          animate={controls}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.8 }}
          initial={initialMenuState}
          onClick={about}
          value="SOBRE"
        >
          SOBRE
        </C.AnimateButton>
      </div>
      <button className="icon" onClick={handleMenu}>
        <MenuIcon className="image" />
      </button>
    </C.Container>
  );
};
