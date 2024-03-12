
import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, dispatch }) => {
  const { id, text, completed } = todo;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: id })}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: id })}>Remove</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoItem;
