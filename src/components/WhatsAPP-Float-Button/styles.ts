import styled from "styled-components";


export const button = styled.div`
    position: fixed;
    z-index: 999;
    left: 20px;
    bottom: 30px;
    width: 90px !important;
    height: 90px;
    background-color: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
        background-color: #075E54;
    }

    .icon {
        margin-top: 3px;
        width: 100%;
        height: 100%;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 600) {
        display: none;
    }
`