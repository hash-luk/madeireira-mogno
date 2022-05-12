import styled from "styled-components";
import { theme } from "../../theme";


export const button = styled.div`
    position: fixed;
    z-index: 999;
    left: 20px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.superLightGreen};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        background-color: ${theme.colors.lightGreen};
    }

    .icon {
        margin-top: 3px;
        width: 100%;
        height: 100%;
        color: ${theme.colors.whiteTextColor};
    }

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 600) {
        width: 60px;
        height: 60px;
    }
`