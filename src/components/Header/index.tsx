import React from 'react';
import * as C from "./styles";


export const Header = () => {
    return(
        <C.Container>
            <div className="logo">
                <div>M</div>
                <div>M</div>
            </div>
            <div className="menu">
                <button id="home">INICIO</button>
                <button id="products">PRODUTOS</button>
                <button id="contact">CONTATO</button>
                <button id="about">SOBRE</button>
            </div>
        </C.Container>
    );
}

