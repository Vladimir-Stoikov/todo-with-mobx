import styled from 'styled-components'
import React from 'react';

const TitleSt = styled.h1`
font-size: 9rem;
margin: 0 auto;
text-align: center;
color: rebeccapurple;
@media (max-width: 600px) {
  font-size: 4rem;
}
`

export default function Title({name}) {
  return <TitleSt>{name}</TitleSt>
}