import React from "react";
import { Todo } from "../models/todolist.model";
import "../css/TodoList.scss";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  onCheckHandler: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className="inner todoList">
      {props.items.map((todo) => (
        <li key={todo.id} className={todo.id}>
          <div onClick={props.onCheckHandler.bind(this, todo.id)}>
            <input type="checkbox" checked={todo.isDone} onChange={() => {}} />
            <p>{todo.text}</p>
          </div>

          <button onClick={props.onDeleteTodo.bind(this, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
