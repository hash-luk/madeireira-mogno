import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
    margin: 50px auto;
    max-width: 1300px;
    height: fit-content;
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;


export const ProductBox = styled.div`
  background-color:${theme.colors.pear};
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
  color: ${theme.colors.whiteTextColor};

  img {
    width: 245px;
    height: 245px;
  }
`;
