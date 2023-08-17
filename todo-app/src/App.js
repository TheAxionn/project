import {React, useState} from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const updateText = (ev) => {
    const value = ev.target.value;
    setText(value);
  };

  const addTodo = () => {
    // let value = document.getElementById('input').value;

    if (text === '') {
      alert("You can't add nothing!");
    }
    else {
      setTodos([...todos, text]);
      setText('');
    }
  };

  const deleteTodo = (targetIndex) => {
    let newTodos = [];
    todos.forEach((todo, index) => {
      if (targetIndex !== index) newTodos.push(todo);
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo</h1>
      <h3>Add your todo</h3>
      <input type='text' id='input' placeholder='Enter your todo...'
        onInput={updateText}
        value={text}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') addTodo();
        }}
      /><br/>
      <button onClick={addTodo}>Add Todo</button>
      {todos.length <= 0 && <h3 style={{color: '#ccc'}}>Nothing yet.</h3> }
      {todos.length > 0 && 
        <ul>
        {todos.map((todo, index) => <li key={index.toString()}>
          {todo} <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
        </li>)}
        </ul>
      }
    </div>
  );
}

export default App;
