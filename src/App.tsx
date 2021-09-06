import React, { useState } from "react";
import { TodoList } from "./Components/TodoList";
import { FormTodo } from "./Components/FormTodo";

// function App() {
//   return <div className="App"></div>;
// }

// React Function Component 型定義
const App: React.FC = () => {
  const [todos, setTodos] = useState<{id: string, text: string}[]>([{id: "def1", text: "default item"}]);

  const todoAddHandler = (newItem: string) => {
    setTodos([{id: Math.random().toString(), text: newItem}, ...todos]);
  };

  return (
    <div className="App">
      <FormTodo onAddTodo={todoAddHandler.bind(this)} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
