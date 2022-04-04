import React from 'react';
import styled from 'styled-components'

const ButtonSt = styled.button`
  cursor: pointer;
  border: none;
  background-color: rebeccapurple;
  font-family: inherit;
  padding: ${({paddingSize}) => paddingSize ? paddingSize : '0.65rem'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.8rem'};
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 0 10px rgba(102, 51, 153, 0.6);
  transition: all .4s ease;
  &:hover {
    background-color: #915bc7;
  }
  &:active {
    background-color: #be8fee;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.4rem;
}
`

export default function Button({func, fontSize, paddingSize, children}) {
  return <ButtonSt onClick={func} fontSize={fontSize} paddingSize={paddingSize}>
    {children}
  </ButtonSt>
}