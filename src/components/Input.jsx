import React, {useState} from 'react';
import styled from 'styled-components'

import Button from './Button';

const InputSt = styled.input`
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 2rem;
  text-align: center;
  outline: none;
  font-family: 'Pacifico', cursive;
  box-shadow: 0 0 10px rgba(102, 51, 153, 0.6);
  color: rgb(102, 51, 153);
  @media (max-width: 600px) {
  font-size: 1.5rem;
}
`

const SectionSt = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

export default function Input({changeToDos}) {

  const [inputValue, setInputValue] = useState('');

  const getText = (event) => {
    setInputValue(event.target.value);
  }

  const addToDo = () => {
   if(inputValue.trim() !== '') {
    changeToDos(prev => prev === '' ? inputValue : prev + ', ' + inputValue);
   setInputValue('')
   }   
  }

  return <SectionSt>
    <InputSt type='text' onChange={getText} value={inputValue}/>
    <Button func={addToDo}>Add</Button>
  </SectionSt>
}