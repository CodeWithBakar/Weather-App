import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoApp() {
  let [todo, setTodo] = useState("");
  let [isNewTaskAdded, setIsNewTaskAdded] = useState(false);

  const updateTodo = (newTodo) => {
    setTodo(newTodo);
    setIsNewTaskAdded(true);
  };

  const resetNewTaskFlag = () => {
    setIsNewTaskAdded(false);
  };

  return (
    <div>
      <AddTodo updateTodo={updateTodo} />
      <TodoList todo={todo} isNewTask={isNewTaskAdded} resetNewTaskFlag={resetNewTaskFlag} />
    </div>
  );
}
