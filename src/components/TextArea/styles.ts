import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 350px;
  height: 65%;
  border-radius: 5px;
  border: 1px solid #adadad;
  font-weight: 300;
  font-size: 12pt;
  resize: none;
  padding: 5px 5px;
  margin-bottom:2px;

  :focus {
    outline: 1px solid #fff;
  }
`;


export const Counter = styled.span`
    position: absolute;
    bottom: 0;
    right: 15px;
`;
