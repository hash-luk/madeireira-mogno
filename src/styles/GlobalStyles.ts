import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${theme.colors.bgColor};
        -webkit-font-smoothing: antialiased !important;
    }


    html {
        scroll-behavior: smooth;
        font-size: 16px;
    }

    @media screen and (max-width: 1032px) {
        body {
            overflow-x: hidden;
        }
    }

`