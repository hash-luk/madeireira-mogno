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

  //Animations

  // const variants = {
  //   start: {
  //     y: -200,
  //     opacity:0
  //   },
  //   end: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       duration: 1,
  //       bouce: .3
  //     }
  //   }
  // }

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
        <C.AnimateButton
          id="home"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.2 }}
          onClick={home}
          value="INICIO"
        >
          TESTE
        </C.AnimateButton>
        <C.AnimateButton
          id="products"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.4 }}
          onClick={products}
          value="PRODUTOS"
        >
          PRODUTOS
        </C.AnimateButton>
        <C.AnimateButton
          id="contact"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.6 }}
          onClick={contact}
          value="CONTATO"
        >
          CONTATO
        </C.AnimateButton>
        <C.AnimateButton
          id="about"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.8 }}
          onClick={about}
          value="SOBRE"
        >
          SOBRE
        </C.AnimateButton>
      </div>
      <a href="#" className="icon" onClick={handleMenu}>
        <MenuIcon className="image" />
      </a>
    </C.Container>
  );
};
