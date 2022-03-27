import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    #bar {
        width: 100%;
        height: 100px;
        color: #FFF;
        font-weight: 500;
        font-size: 18pt;
        background-color: #83AF9B;
        text-align: center;
        padding-top: 33px;

        p {
            text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
        }
    }

    #data {
        height: 525px;
        width: 500px;
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.7);
        box-shadow: 1px 1px 1px #000;
        margin: 0 auto;
        margin-top: 70px;

        @media screen and (max-width: 480px) {
            width: 100%;
        }
    }

    #maps {
        text-align: center;
        color: #FFF;
        margin-top:30px;
        width: 100%;
        height: 100vh;
        padding: 0px 15px;

        .map {
            width: 100%;
            height: 500px;
            margin-top: 7px;
        }
    }

    #contacts {
        display: block;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

        margin: 0 auto;
        color: #FFF;
        width: 100%;
        height: 180px;
    }

    #channels {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        gap: 15px;

        p {
            font-size: 14pt;
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 10px;
            cursor: pointer;
            transition: all .2s ease-in;
        }

        p:hover {
            transform: scale(1.05);
        }
    }
`

export const Form = styled.form`

    #fields {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-weight: 300;

        #field {
            width: 100%;
            
            label {
                font-size: 11pt;
            }

            input {
                width: 100%;
                height: 30px;
                background-color: #e0e0e0;
                border: 1px solid rgba(0,0,0,0.6);
            }
        }
    }

    background-color: white;
    width: 100%;
    height: 500px;
    padding: 5px;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
`

export const MessageBox = styled.textarea`
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    resize: none;
`

export const Button = styled.button`
    width: 100%;
    height: 50px;
    color: #FFF;
    font-weight: 300;
    font-size: 12pt;
    border: none;
    background-color: #036564;
    transition: all ease .1s;

    :hover {
        background-color: #033649;
        cursor: pointer;
        border: 1px solid rgba(0,0,0,0.5);
        box-shadow: 1px 1px 1px rgba(0,0,0,0.8);
    }
`