import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Title from './components/Title';
import Input from './components/Input';
import ToDo from './components/Todo';
import store from './store/Store';

const ToDosSt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = observer(() => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(false);
  }, [render]);

  return (
    <>
      <Title name='Todos' />
      <Input />
      <ToDosSt>
        {store.data.map((todo, id) => (
          <ToDo key={id} id={id} todo={todo} rerender={setRender} />
        ))}
      </ToDosSt>
    </>
  );
});

export default App;
