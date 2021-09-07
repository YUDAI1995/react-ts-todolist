import React, { useRef } from "react";
import "../css/FormTodo.scss";


interface addFunctionProps {
  onAddTodo: (newItem: string) => void;
}

export const FormTodo: React.FC<addFunctionProps> = (props) => {
  // useRefを実行、このrefを使用しinputDOMオブジェクトにrefオブジェクトを割り当てる
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler} className="inner">
      <div className="inputForm">
        <label htmlFor="todo-text">TodoList</label>
        <input type="text" id="todo-text" ref={textInputRef} placeholder="Enter to add."/>
      </div>
      <button type="submit">Add.</button>
    </form>
  );
};
