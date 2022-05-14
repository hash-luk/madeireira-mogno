import styled from "styled-components";

export const Container = styled.div`
  .prductsContent {
    display: flex;
    flex-direction: column;
  }

  .buttonsContainer {
    height: 2.8rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 130px;
    gap: 1rem;
  }

  .show {
    display: flex;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const Bar = styled.div`
  position: relative;
  margin: 0 auto;
  transform: translateY(90px);
  max-width: 1300px;
  height: 40px;
  background-color: #79bd9a;
  padding-left: 5px;
  display: flex;
  align-items: center;

  h2 {
    color: #000;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    text-align: center !important;
  }
`;


export const Button = styled.button`
  height: 2.5rem;
  width: 8rem;
  text-align: center;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background-color: #77c91e;

  ::selection {
    background-color: red;
  }
`;
