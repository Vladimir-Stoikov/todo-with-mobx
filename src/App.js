import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Input from './components/Input';
import ToDo from './components/Todo';

const ToDosSt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [date, setDate] = useState(sessionStorage.getItem('todos') ? sessionStorage.getItem('todos') : '');

  useEffect(() => {
    sessionStorage.setItem('todos', date);
  }, [date]);

  return (
    <>
      <Title name='Todos' />
      <Input changeToDos={setDate} />
      <ToDosSt>
        {date !== '' &&
          date.split(', ').map((todo, id) => (
            <ToDo key={id} id={id} changeToDos={setDate}>
              {todo}
            </ToDo>
          ))}
      </ToDosSt>
    </>
  );
}

export default App;
