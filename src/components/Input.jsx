import React, {useState} from 'react';
import styled from 'styled-components'
import { observer } from 'mobx-react-lite';

import store from '../store/Store';
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

export default function Input () {

  const [inputValue, setInputValue] = useState('');

  function updateAddData() {
    store.addToDo({text: inputValue, complete: false});
    setInputValue('');
  }

  return <SectionSt>
    <InputSt type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
    <Button func={updateAddData}>Add</Button>
  </SectionSt>
}

