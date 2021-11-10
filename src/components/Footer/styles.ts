import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 180px;
    background-color: #152431;

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
                text-decoration: none;
                color: #519548;

                :hover {
                    color: #88C425;
                }
            }

            p {
                color: #FFF;
            }
        }

        #social {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #icons {
            width: 40%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    .icon {
        width: 40px;
        height: 40px;
        color: #FFF;
        :hover{
            cursor: pointer;
        }
    }
`

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 14pt;
    color: #FFF;
`

export const Redes = styled.p`
    font-weight:500;
    font-size: 15pt;
    color: #1B676B;
`