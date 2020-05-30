import React from 'react';
import TodoList from './todo/TodoList'


function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title:'Купить хлеб'},
    {id:2, completed: false, title:'Купить масло'},
    {id:3, completed: false, title:'Купить молоко'}
  ])


function toggleTodo(id){
  setTodos(
    todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  )
}

  return (
    <div className='wrapper'>
      <h1>To do list</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
	</div>
  );
}

export default App;
