import React, { useRef } from "react";

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
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Content</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add.</button>
    </form>
  );
};
