import React from "react";
import Header from "./component/header";
import CreateTodo from "./component/create-todo";
import TodoList from "./component/todo-list";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CreateTodo/>
      <TodoList/>

    </React.Fragment>
  );
}

export default App;
