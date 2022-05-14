import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  #data {
    height: 525px;
    width: 500px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.7);
    box-shadow: 1px 1px 1px ${theme.colors.black};
    margin: 0 auto;
    margin-top: 100px;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  #maps {
    text-align: center;
    color: ${theme.colors.white};
    margin-top: 30px;
    width: 100%;
    height: 100vh;
    padding: 0px 15px;

    .map {
      width: 100%;
      height: 500px;
      margin-top: 7px;
    }
  }

  #contacts {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    margin: 0 auto;
    color: ${theme.colors.white};
    width: 100%;
    height: 180px;
  }

  #channels {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 15px;

    p {
      font-size: 14pt;
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 10px;
      cursor: pointer;
      transition: all 0.2s ease-in;
    }

    p:hover {
      transform: scale(1.05);
    }
  }
`;

export const Bar = styled.div`
  position: relative;
  margin: 0 auto;
  transform: translateY(90px);
  max-width: 1300px;
  height: 40px;
  background-color: ${theme.colors.lightGreen};
  padding-left: 5px;
  display: flex;
  align-items: center;

  h2 {
    color: ${theme.colors.whiteTextColor};
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    text-align: center !important;
  }
`;

export const Form = styled.form`
  #fields {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    font-weight: 300;
    padding: 0 5px;

    #field {
      width: 100%;

      label {
        font-size: 11pt;
        font-weight: 400;
      }

      input {
        width: 100%;
        height: 30px;
        background-color: ${theme.colors.chineseWhite};
        border: 1px solid rgba(0, 0, 0, 0.6);
        padding: 0 5px;
      }
    }
  }

  background-color: ${theme.colors.white};
  width: 100%;
  height: 500px;
  padding: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
`;

export const MessageBox = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.chineseWhite};
  resize: none;
  padding: 0 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: ${theme.colors.white};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12pt;
  border: none;
  background-color: ${theme.colors.superLightGreen};
  transition: all ease 0.1s;

  :hover {
    background-color: ${theme.colors.lightGreen};
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;
