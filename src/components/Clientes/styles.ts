import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    text-align: center;
    font-weight: 500;
    color: ${theme.colors.whiteTextColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 60px;

    .carousel {
        width: 1300px;
        transition: all ease;

        .prev,.next {
            :hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }
    }

    .opinions {
        background-color: ${theme.colors.mediumYellow};
        width: 300px;
        color: ${theme.colors.whiteTextColor};
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
            background-color: ${theme.colors.lineColor};
        }
        
        p:first-child {
            font-weight: 700;
            font-size: 1.1rem;
        }

        p:last-child {
            font-weight: 400;
            max-width: 90%;
            font-size: 1rem;
        }

        .selectors {
            width: 90px;
            height: 30px;
        }

        #point {
            width: 40px;
            height: 40px;
            background: ${theme.colors.black};
        }

        .opinion {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
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

    @media screen and (max-width: 600px) {
        .carousel {
            width: 100%;
        }
        .opinions {
            width: 90%;
            font-weight: 300;
            font-size: 13px;
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
