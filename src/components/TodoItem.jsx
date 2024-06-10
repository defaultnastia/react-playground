import css from "./Alert.module.css";

const TodoItem = ({ id, completed, todo }) => {
  return (
    <li className={css.item}>
      <input type="checkbox" />
      <span>{todo}</span>
      <button className="btn border" size="18px">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
