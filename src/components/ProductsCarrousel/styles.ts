import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
    width: 210px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    padding-bottom: 3px;

    .image {
        width: 200px;
        height: 190px;
        transform: scale(0.8);
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        box-shadow: 1px 1px 2px ${theme.colors.black};
    }

    .image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }

    .text {
        text-align: center;

        margin: 5px 0px;

        p {
            color: ${theme.colors.blackTextColor};
            font-weight: 500;
        }
    }

    .text:last-child {
        font-weight: 300;
        color: ${theme.colors.whiteTextColor};
    }
`