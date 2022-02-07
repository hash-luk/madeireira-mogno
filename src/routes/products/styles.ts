import styled from "styled-components"


export const Container = styled.div`
    .content {
        margin: 150px auto;
        max-width:1300px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .prductsContent {
        display: flex;
        flex-direction: column;
    }

    .paginate {
        width: 1300px;
        margin: 0 auto;
        margin-bottom: 5px;
        color: #FFF;
        display: flex;
        /* border: 1px solid red; */
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
    }
`

export const Bar = styled.div`
    position: relative;
    margin: 0 auto;
    transform: translateY(90px);
    max-width: 1300px;
    height: 40px;
    background-color: #79BD9A;
    padding-left: 5px;
    display: flex;
    align-items: center;


    h2 {
        color: #000;
        text-align: left;
    }
`

export const ProductBox = styled.div`
    background-color:#79BD9A ;
    width: 295px;
    height: 309.8px;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0px 0px 5px 2px rgb(122 122 122 / 48%);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    
    img {
        width: 245px;
        height: 245px;
    }
`