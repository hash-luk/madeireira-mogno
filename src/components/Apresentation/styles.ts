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

    @media(max-width: 767px) {
        width: 100%;
        
        .logodiv {
            display: none;
        }
        .bg {

        }

        .filter {
            width: 100%;
        }

        img {
            
        }
    }
`

export const FormGroup = styled.div`
    width: 255px;
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

    @media(max-width: 767px) {
        display: none;
    }
`

export const Title = styled.p`
    color: #77C91E;
    font-weight: 700;
    font-size: 14pt;
    text-align: center;
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