import styled from 'styled-components';
import { theme } from '../../theme';
import { queries } from '../../styles/queries';


export const Container = styled.div`
    width: 100%;
    height: 400px;
    align-items: center;
    padding: 50px;
    margin: 0 auto;

    h2 {
        font-weight: 700;
        color: ${theme.colors.white};
        text-align: center;
        margin-bottom: 30px;
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
        transform: scale(1.1);
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

    @media screen and (max-width: 1366px) {
        .carousel {
            width: 100%;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 0;
        margin-top: 25px;

        .carousel {
            width: 100%;
        }

        .prev, .next {
            display: none;
        }
    }


    @media screen and (max-width: 768px) {
        padding: 0;
        margin-top: 25px;

        h3 {
            display: block;
        }

        .carousel {
            width: 900px;
        }

        .productsDiv {
            width: 100%;
            justify-content: center;
        }

        .next, .prev {
            display: none;
        }

    }

    @media screen and (max-width: 600px) {
        height: 85vh;
        
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

    @media screen and (max-width: 480px) {
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

    @media screen and (max-width: ${queries.sm_mobile}px) {
        h2 {
            margin-bottom: 0;
        }

        .responsive {
            justify-content: space-evenly;
        }
    }
`