import styled from "styled-components";
import { theme } from "../../theme";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 1300px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 100%;
    user-select: none;

    div {
      font-size: 60pt;
      text-align: center;
      font-weight: 500;
    }
    div:first-child {
      color: ${theme.colors.lightGreen};
    }
    div:last-child {
      color: ${theme.colors.whiteTextColor};
    }

    :hover {
      cursor: pointer;
    }
  }

  #links {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 6;
    margin-top: 200px;
    display: none;
  }

  .menu {
    width: 700px;
    display: flex;
    justify-content: space-around;

    button {
      width: 137px;
      height: 33px;
      border-radius: 5px;
      background-color: #77c91e;
      color: ${theme.colors.whiteTextColor};
      border: none;
      font-weight: 500;
      font-size: 14pt;
      text-shadow: 0.5px 0.5px 0.5px #000;
    }

    button:hover {
      cursor: pointer;
      background-color: ${theme.colors.lightGreen};
    }
  }

  .icon {
    height: 100%;
    width: 100px;
    background-color: transparent;
    color: ${theme.colors.whiteTextColor};
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    border: none;

    .image {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1032px) {
    max-width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    .menu {
      display: none;
    }

    .icon {
      display: block;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    .menu {
      display: none;
    }
  }
`;

export const ALinks = styled(motion.a)`
  border-top: 1px solid #000;
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.responsiveWhiteTextColor};
  text-align: center;
  font-weight: 400;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AnimateButton = styled(motion.button)`
  width: 137px;
  height: 33px;
  border-radius: 5px;
  background-color: ${theme.colors.superLightGreen};

  border: none;

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.lightGreen};
  }

  a {
    color: ${theme.colors.whiteTextColor};
    text-decoration: none;
    font-weight: 500;
    font-size: 14pt;
    text-shadow: 0.5px 0.5px 0.5px #000;
    :visited {
      color: ${theme.colors.whiteTextColor};
    }
  }
`;
