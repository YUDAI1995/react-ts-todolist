import React from "react";
import { todo } from "../models/todolist.model";
import "../css/TodoList.scss";

interface TodoListProps {
  items: todo[];
  onDeleteTodo: (id: string) => void;
}


export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className="inner">
      {props.items.map((todo) => (
        <li key={todo.id} className={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(this, todo.id)}>Delete.</button>
        </li>
      ))}
    </ul>
  );
};
