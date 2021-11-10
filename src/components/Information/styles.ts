import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px 50px 0px;
    
    h2 {
        font-weight: 500;
    }

    .content {
        width: 1300px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    #email {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #FFF;

        #fields {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }

        #field{
            width: 85%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
        }

        #field input, textarea{
            width: 350px;
            height: 100%;
            border-radius: 5px;
            border: 1px solid #adadad;
            font-weight: 300;
            font-size: 12pt;
        }
    }

    #map {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        

        iframe {
            width: 100%;
            height: 90%;
            margin: 10px 0px;
            border: none;
        }
    }
`

export const SendButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: #77C91E;
    color: #FFF;
    box-shadow: none;
    border: none;
    font-weight: 400;
    font-size: 13pt;
    
    :hover {
        cursor: pointer;
        background-color: #62a619;
    }
`

export const Bar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #3f8c37;
    position: absolute;
    overflow: hidden;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #FFF;
`

export const BuyButton = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14pt;
    border: none;
    background-color:#CBE86B ;
    color: #1C140D;

    :hover {
        cursor: pointer;
    }
`