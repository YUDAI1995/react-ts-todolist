import React, { useState } from "react";
import { TodoList } from "./Components/TodoList";
import { FormTodo } from "./Components/FormTodo";
import { Filtter } from "./Components/Filtter";
import { Todo, TodoItem } from "./models/todolist.model";
import { Modal } from "./Components/Modal";
import { Footer } from "./Components/Footer";
import { Tab } from "./models/tab.model";
import { validate } from "class-validator";

// React Function Component 型定義
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new TodoItem(Math.random().toString(), "Todo Item", false),
  ]);

  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [modalShow, setModalShow] = useState<boolean>(false);

  const todoAddHandler = (newItem: string) => {
    // todosが常に最新か保証できないため
    //setTodos([{ id: Math.random().toString(), text: newItem }, ...todos]);

    const newTodoItem = new TodoItem(Math.random().toString(), newItem, false);
    validate(newTodoItem)
      .then((errors) => {
        if (errors.length > 0) {
          throw new Error("No item.");
        }
        // prevtodosとして常に一つ前の状態のtodosを受け取るようにする
        setTodos((prevtodos) => [newTodoItem, ...prevtodos]);
      })
      .catch((err) => {
        setModalShow(true);
      });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevtodos) => prevtodos.filter((todo) => todo.id !== todoId));
  };

  const tabItem: Tab[] = ["All", "Todo", "Done"];
  const todoFiltterHandler = (tab: Tab) => {
    setActiveTab(tab);
  };

  const filterTodos = todos.filter((todo) => {
    if (activeTab === tabItem[0]) return true;
    if (activeTab === tabItem[1]) return !todo.isDone;
    if (activeTab === tabItem[2]) return todo.isDone;
    else return true;
  });

  const onCheckHandler = (todoId: string) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(checkedTodos);
  };

  return (
    <div className="App">
      <FormTodo onAddTodo={todoAddHandler} />
      <Filtter
        tabItem={tabItem}
        activeTab={activeTab}
        onFiltterHandler={todoFiltterHandler}
      />
      <TodoList
        items={filterTodos}
        onDeleteTodo={todoDeleteHandler}
        onCheckHandler={onCheckHandler}
      />
      <Modal modalShow={modalShow} setModalShow={setModalShow} />
      <Footer />
    </div>
  );
};

export default App;
