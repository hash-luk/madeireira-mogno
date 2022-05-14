import styled from "styled-components"
import { theme } from "../../theme"

export const Container = styled.div`
    #about {
        max-width: 1300px;
        height: fit-content;
        margin: 0 auto;
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.whiteTextColor};
        text-align: center;
        margin-top: 90px;
        padding: 10px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.2rem;
    }
`

export const Bar = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1300px;
    height: 40px;
    background-color: ${theme.colors.lightGreen};
    padding-left: 5px;
    display: flex;
    align-items: center;

    h2 {
        color: ${theme.colors.whiteTextColor};
        text-align: left;
    }
`