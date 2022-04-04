import React from 'react';
import styled from 'styled-components'

import Button from './Button';
import CloseIcon from '@mui/icons-material/Close';

const ToDoSt = styled.section`
 display: flex;
 margin: 1rem auto;
 @media (max-width: 600px) {
  margin: 0.7rem auto;
}
`

const TextSt = styled.div`
 border-top-left-radius: 5px;
 border-bottom-left-radius: 5px;
 width: 430px;
 background-color: white;
 color: rebeccapurple;
 text-align: center;
 font-size: 2rem;
 @media (max-width: 600px) {
  font-size: 1.5rem;
  width: 300px;
}
`


export default function ToDo({id, children, changeToDos}) {

  const deleteTodo = id => {
    changeToDos(prev => {
      const newTodos = prev.split(', ');
      newTodos.splice(id, 1);
      return newTodos.join(', ');
    });
  } 

  return <ToDoSt>
    <TextSt>{children}</TextSt>
    <Button func={() => deleteTodo(id)} fontSize='1rem' paddingSize='0.45rem 0.8rem 0'><CloseIcon /></Button>
  </ToDoSt>
  
}