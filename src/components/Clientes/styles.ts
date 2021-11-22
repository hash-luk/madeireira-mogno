import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    text-align: center;
    font-weight: 500;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    margin: 0 auto;

    .carousel {
        width: 1300px;
        transition: all ease;
    }

    .opinions {
        background-color: #FFA54F;
        width: 300px;
        color: #fff;
        width: 1000px;
        height: 190px;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-evenly;
        border-radius: 7px;
        margin: 50px auto;
        padding: 0px 10px;
        text-align: center;

        .opinions__ml1 {
            margin-left: 5px;
        }

        #line {
            width: 90%;
            height: 2px;
            background-color: #2D4B0C;
        }
        
        p:first-child {
            font-weight: 400;
        }

        p:last-child {
            font-weight: 300;
            max-width: 90%;
        }

        .selectors {
            width: 90px;
            height: 30px;
            border: 1px solid red;
        }

        #point {
            width: 40px;
            height: 40px;
            background: #000;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;

        .carousel{
            width: 100%;
        }

        .opinions {
            width: 100%;
        } 
        .prev,.next {
            display: none;
        }
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-top: 40px;
        
        .carousel {
            width: 90%;
        }
        
        .opinions {
            font-weight: 300;
            max-width: 100%;
        }
    }
`
