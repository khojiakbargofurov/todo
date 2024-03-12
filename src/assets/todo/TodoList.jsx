// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, dispatch }) => {
  return (
    <ul>
        {todos.map((todo) => (
      <li>
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      </li>
        ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoList;
