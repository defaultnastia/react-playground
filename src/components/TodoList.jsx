import { useState } from "react";
import TodoItem from "./TodoItem";
import css from "./Alert.module.css";
import todos from "../assets/todos";

const TodoList = () => {
  return (
    <>
      <div className="flex">
        <input className={css.input} />
        <button className="btn border">Add</button>
      </div>
      <ul className={css.list}>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
