import React from 'react';
import * as C from "./styles";
import MenuIcon from '@mui/icons-material/Menu';


export const Header = () => {

    

    function handleMenu() {
        const links = document.getElementById("links") as HTMLDivElement
        if(links?.style.display === "block") {
            links.style.display = "none"

        } else {
             links.style.display = "block"
        }

        console.log(links.style.display)
    }

    return(
        <C.Container>
            <div className="logo">
                <div>M</div>
                <div>M</div>
            </div>
            <div id="links">
                <div>
                    <C.ALinks >INICIO</C.ALinks>
                    <C.ALinks >PRODUTOS</C.ALinks>
                    <C.ALinks >CONTATO</C.ALinks>
                    <C.ALinks >SOBRE</C.ALinks>
                </div>
            </div>
            <div className="menu">
                <button id="home">INICIO</button>
                <button id="products">PRODUTOS</button>
                <button id="contact">CONTATO</button>
                <button id="about">SOBRE</button>
            </div>
            <a href="#" className="icon" onClick={handleMenu}>
                <MenuIcon className="image"/>
            </a>
        </C.Container>
    );
}

