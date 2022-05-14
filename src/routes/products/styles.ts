import styled from "styled-components";
import { theme } from "../../theme";

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


export const Button = styled.button`
  height: 2.5rem;
  width: 8rem;
  text-align: center;
  color: ${theme.colors.whiteTextColor};
  border: none;
  font-weight: 500;
  text-shadow: 1px 1.5px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: ${theme.colors.superLightGreen};

  :hover {
    background-color: ${theme.colors.lightGreen};
  }

  .selected {
    
  }
`;
