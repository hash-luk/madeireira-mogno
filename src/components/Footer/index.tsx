import React from "react";
import * as C from './styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer =() => {
    return(
        <C.Container>
            <div className="info">
                <div id="left">
                    <C.Paragraph>R. Doze, 42 - Inconfidentes, Contagem - MG, 32260-210</C.Paragraph>
                    <C.Paragraph>(31) 3397-9765</C.Paragraph>
                    <C.Paragraph>email@gmail.com</C.Paragraph>
                    <div id="social">
                        <C.Redes>REDES</C.Redes>
                        <div id="icons">
                            <InstagramIcon className="icon"/>
                            <FacebookIcon  className="icon"/>
                            <LinkedInIcon  className="icon"/>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <a href="/">Início</a>
                    <a href="/produtos">Produtos</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                    <p>© Copyright © 2021 Todos os direitos reservados</p>
                </div>
            </div>
        </C.Container>
    );
}