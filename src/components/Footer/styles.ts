import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 250px;
    padding: 15px 0;
    border-top: 1px solid ${theme.colors.borderColor};

    .info {
        width: 1300px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        #left {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }

        #right {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            a {
                text-decoration: underline;
                text-underline-offset: 2px;
                color: ${theme.colors.whiteTextColor};

                :hover {
                    color: ${theme.colors.lightGreen};
                }
            }

            p {
                color: ${theme.colors.whiteTextColor};
            }
        }

        #social {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        #icons {
            width: 20%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
        }
    }

    .icon {
        width: 25px;
        height: 25px;
        color: ${theme.colors.whiteTextColor};

        :hover{
            cursor: pointer;
            color: ${theme.colors.lightGreen};
        }
    }

    @media screen and (max-width: 1032px) {
        width: 100%;

        .info {
            width: 100%;
            #right {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .info {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        height: 500px;

        .info {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0px 5px;
        }

        #left {
            width: 100% !important;
        }

        #social {
            justify-content: space-around;
        }

        #right {
            width: 100% !important;
            text-align: center;
        }
    }


    @media screen and (max-width: 480px) {
        height: 600px;

        .info{
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0px 5px;
        }

        #left {
            width: 100% !important;
        }

        #social {
            justify-content: space-around;

            #icons {
                margin-top: 20px;
            }
        }

        #right {
            width: 100% !important;
            p{
                width: 100%;
                text-align: center;
            }
        }
    }
`

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 14pt;
    color: #FFF;
`