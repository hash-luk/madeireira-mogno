import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 400px;

    align-items: center;
    padding: 50px;
    margin: 0 auto;

    h3 {
        /* display: none; */
        font-weight: 700;
        color: #FFF;
        text-align: center;
        display: none;
    }

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

    .responsive {
        margin: 0 auto;
        width: 100%;
        height: 95%;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 767px) {
        height: 100vh;
        
        .carousel {
            width: 100%;
            display: none;
        }

        .productStyle:hover {
            transform: scale(0.7);
        }

        .responsive {
            
            display: flex;
        } 

        h3 {
            display: block;
            text-decoration: underline;
        }
            
    }
`