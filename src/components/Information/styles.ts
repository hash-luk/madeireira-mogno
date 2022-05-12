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
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .content {
        width: 1300px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 30px;

        tex-tarea {
            resize: none;
        }
    }

    #email {
        width: 49%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #FFF;
        padding: 15px 0px;
        background-color: rgba(0,0,0,0.3);

        #content__email {
            width: 85%;
            height: 80%;
            /* background-color: rgba(0,0,0,0.7); */
        }

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

        textarea {
            resize: none;
        }
    }

    #map {
        width: 49%;
        height: 103%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: relative;

        iframe {
            width: 100%;
            height: 100%;
            margin: 10px 0px;
            border: none;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 800px;
        margin: 0;

        .content {
            flex-direction: column;
        }

        #email {
            width: 100%;
            height: 50%;
            padding: 0 200px;
        }

        #map {
            width: 100%;
            height: 50%;
            margin-top: 20px;
        }
    }


    @media screen and (max-width: 768px) {
        width: 100%;
        height: 800px;
        margin: 0;

        .content {
            flex-direction: column;
        }

        #email {
            width: 100%;
            height: 50%;
            padding: 0px 40px;
        }

        #map {
            width: 100%;
            height: 50%;
            margin-top: 30px;
        }
    }
    
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 1000px;

        .content {
            flex-direction: column;
        }

        #email {
            width: 100%;
            height: 70%;
            padding: 0px !important;

            #fields {
                height: 90%;
            }


            #field {
                height: 70px;
                width: 80%;
                flex-direction: column;

                label {
                    margin-bottom: 5px;
                }
            }
        }
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 900px;

        .content {
            flex-direction: column;
        }

        #email {
            width: 100%;
            height: 50%;

            #field {
                width: 100%;
            }
        }

        #map {
            width: 100%;
            height: 50%;
            margin-top: 30px;
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