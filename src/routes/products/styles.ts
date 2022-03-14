import styled from "styled-components";

export const Container = styled.div`
  .sudati {
    margin: 50px auto;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .eucatex {
    margin: 50px auto;
    max-width: 1300px;
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .pcb {
    margin: 50px auto;
    max-width: 1300px;
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

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

export const ProductBox = styled.div`
  background-color: #79bd9a;
  width: 295px;
  height: 309.8px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0px 0px 5px 2px rgb(122 122 122 / 48%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;

  img {
    width: 245px;
    height: 245px;
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
