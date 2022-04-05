import React from 'react';
import styled from 'styled-components'


import Button from './Button';
import CloseIcon from '@mui/icons-material/Close';
import store from '../store/Store';

const ToDoSt = styled.section`
 display: flex;
 margin: 1rem auto;
 @media (max-width: 600px) {
  margin: 0.7rem auto;
}
`

const TextSt = styled.div`
 text-decoration: ${({crossText}) => crossText === true ? 'line-through' : 'none'};
 user-select: none;
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


export default function ToDo({todo, id, rerender}) {

  function updateRemoveData(id) {
    store.removeToDo(id);
  }

  function makeTodoComplete(id) {
    store.completeTodo(id);
    rerender(true);
  }

  return <ToDoSt>
    <TextSt onClick={() => makeTodoComplete(id)} crossText={todo.complete}>{todo.text}</TextSt>
    <Button func={() => updateRemoveData(id)} fontSize='1rem' paddingSize='0.45rem 0.8rem 0'><CloseIcon /></Button>
  </ToDoSt>
  
}