import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 400px;

    align-items: center;
    padding: 50px;
    margin: 0 auto;

    .carousel {
        width: 1300px;
        height: 100%;
        margin: 0 auto;
    }

    .productsDiv {
        width: 70%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .next:hover, .prev:hover {
        cursor: pointer;
    }

    .productStyle:hover {
        transform: scale(1);
        cursor: pointer;
    }
`