import styled from "styled-components";
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
    width: 30%;
    height: 100%;
    div {
      font-size: 60pt;
      text-align: center;
      font-weight: 500;
    }
    div:first-child {
      color: #77c91e;
    }
    div:last-child {
      color: #fff;
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
      color: #fff;
      border: none;
      font-weight: 500;
      font-size: 14pt;
      text-shadow: 0.5px 0.5px 0.5px #000;
    }

    button:hover {
      cursor: pointer;
      background-color: #86de26;
    }
  }

  .icon {
    height: 100%;
    width: 100px;
    background-color: transparent;
    color: #fff;
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
  background-color: #fdfdfd;
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
  background-color: #77c91e;
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 14pt;
  text-shadow: 0.5px 0.5px 0.5px #000;

  :hover {
    cursor: pointer;
    background-color: #86de26;
  }
`;
