import React, { useState } from 'react';
import '../styles/App.css';
import TodoList from './TodoList';

const App = () => {

  const [ viewTasks, setViewTasks ] = useState( true );

  return (
    <>
       <TodoList/>
    </>
  );
};

export default App;

