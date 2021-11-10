import styled from "styled-components";

export const Container = styled.div`

    width: 1300px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 100%;
        div {
            font-size: 60pt;
            text-align: center;
            font-weight: 500;
        }
        div:first-child {
            color: #77C91E;
        }
        div:last-child {
            color: #FFF;
        }
    }

    .menu {
        width: 700px;
        display: flex;
        justify-content: space-around;

        button {
            width: 137px;
            height: 33px;
            border-radius: 5px;
            background-color: #77C91E;
            color: #FFF;
            border: none;
            font-weight: 500;
            font-size: 14pt;
            text-shadow: 0.5px 0.5px 0.5px #000;
        }

        button:hover {
            cursor: pointer;
            background-color: #86de26;
        }
    }
`