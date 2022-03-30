import styled from "styled-components";


export const Container = styled.div`

    width: 210px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.7);
    padding-bottom: 3px;

    .image {
        width: 200px;
        height: 190px;
        transform: scale(0.8);
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        box-shadow: 1px 1px 2px black;
    }

    .image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }

    .text {
        text-align: center;
        font-weight: 400;
        margin: 5px 0px;

        p {
            color: #000;
        }
    }

    .text:last-child {
        font-weight: 300;
        color: #FFF;
    }
`