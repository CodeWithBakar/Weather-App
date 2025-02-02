/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({ todo, isNewTask, resetNewTaskFlag }) {
  let [todoArr, setTodoArr] = useState([
    { task: "sample", id: uuidv4() }
  ]);

  useEffect(() => {
    if (isNewTask) {
      setTodoArr((prevTodoArr) => [
        ...prevTodoArr,
        { task: todo, id: uuidv4() }
      ]);
      resetNewTaskFlag();  
    }
  }, [isNewTask, todo, resetNewTaskFlag]);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoArr.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.task}</li>
        ))}
      </ul>
    </div>
  );
}
