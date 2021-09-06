import React, { useState } from "react";
import { TodoList } from "./Components/TodoList";
import { FormTodo } from "./Components/FormTodo";
import { todo } from "./models/todolist.model";
import { Footer } from "./Components/Footer";

// function App() {
//   return <div className="App"></div>;
// }

// React Function Component 型定義
const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([
    { id: Math.random().toString(), text: "Todo Item" },
  ]);

  const todoAddHandler = (newItem: string) => {
    // todosが常に最新か保証できない
    //setTodos([{ id: Math.random().toString(), text: newItem }, ...todos]);

    // prevtodosとして常に一つ前の状態のtodosを受け取るようにする
    setTodos(prevtodos => [{ id: Math.random().toString(), text: newItem }, ...prevtodos]);
  };

  const todoDeleteHandler = (todoId: string) => {
    
    setTodos(prevtodos => prevtodos.filter(todo => todo.id !== todoId));
    
    
  }

  return (
    <div className="App">
      <FormTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      <Footer/>
    </div>
  );
};

export default App;
