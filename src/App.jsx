import React, { useReducer } from 'react';
import TodoList from './assets/todo/TodoList';

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    if (!text.trim()) {
      alert('Please enter a valid todo');
      return; // Don't add todo if text is empty
    }
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, completed: false } });
  };

  return (
    <div className="max-w-md p-6 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-center mb-6">TODO</h2>
      <TodoList todos={state.todos} dispatch={dispatch} />
      <input
        className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
