import React, { useState } from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(todo.name);

  const handleUpdate = () => {
    dispatch({
      type: ACTIONS.UPDATE_TODO,
      payload: { id: todo.id, name: updatedName },
    });
    setIsEditing(false); // Hide input field after updating
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      ) : (
        <span style={{ color: todo.complete ? "#333" : "#fff" }}>
          {todo.name}
        </span>
      )}
      {isEditing ? (
        <button onClick={() => handleUpdate()}>Update</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
