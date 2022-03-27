import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    .bg {
        width: 100%;
        height: 100%;
    }

    .filter{
        width: 100%;
        height: 100%;
        background-color: #000;
        position: absolute;
        opacity: 0.5;
    }

    .logodiv {
        width: 500px;
        height: 700px;
        position: absolute;
        z-index: 1;
        right: 0;
        margin-right:500px;
        margin-top: 250px;
    }

    .logodiv img {
        width: 100%;
        height: 70%;
    }

    #terms {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #fields {
        height: 300px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-evenly;
        position: relative;

    }

    @media screen and ( max-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .logodiv {
            width: 400px;
            height: 400px;
            margin: 0 auto;
            transform: translate(-285px,-250px);
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .logodiv {
            display: none;
        }

    }

    @media screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .logodiv {
            display: none;
        }

        .filter {
            width: 101%;
            height: 101%;
        }
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
        .logodiv {
            display: none;
        }

        .filter {
            width: 100%;
        }
    }
`

export const FormGroup = styled.div`
    width: 263px;
    height: 478px;
    background-color: #FFF;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 250px 0px 0px 300px;
    box-shadow: 1px 1px 1px ;


    @media screen and (max-width: 1024px) {
        margin: 0;
        transform: translate(20px,100px);
        width: 300px;
    }

    @media screen and (max-width: 768px) {
        transform: translate(50px,-200px);
    }

    @media screen and (max-width: 600px) {
        transform: translate(15px,-2px);
    }

    @media screen and (max-width: 480px) {
        display: block;
        margin: 0 auto;
        transform: translate(0px,0px);
        width: 256px;
        
        div {
            margin-left: 5px;
            width: 100%;
        }

        #terms {
            margin: 0;
        }
    }
`

export const Title = styled.p`
    color: #77C91E;
    font-weight: 700;
    font-size: 14pt;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const Label = styled.label`
    font-weight: 400;
    color: #989797;
    opacity: 0.8;
    pointer-events: none;
    padding: 0 5px;
    position: absolute;
`

export const CheckBox = styled.input.attrs({type:'checkbox'})`
    border: 1px solid #000;
`

export const Terms = styled.label`
    font-weight: 300;
    color: #000;
    font-size: 10pt;
    margin-left: 0.5em;
    white-space: nowrap;

    @media screen and (max-width: 1024px) {
        margin: 0px 0px 0px 5px;
    }

    @media screen and (max-width: 768px) {
        margin: 0;
    }

    @media(max-width: 480px) {
        margin-left: 0;
    }
`

export const Request = styled.button`
    width: 229px;
    height: 40px;
    background-color: #77C91E;
    color: #FFF;
    box-shadow: 1px 1px 1px #001;
    border: none;
    transition: all 0.2s ease-in-out;
    font-weight: 400;
    font-size: 14pt;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media(max-width: 480px){
        margin: 50px 0px 0px 10px;
    }
`

export const Input = styled.input.attrs({type:'text'})`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom:1px solid #9c9c9c;
    -webkit-appearance: none;
    outline: none;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;

    :focus {
        border: none;
        outline: none;
        border-bottom: 2px solid #000;
    }
`