import { useState } from "react";
import "../../assets/styles/Todos.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/actions";

const Todos = () => {
  const [title, setTitle] = useState("");
  const todosList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!title) return;
    dispatch(addTodo(title));
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className="todos-container">
        {todosList.length > 0 &&
          todosList.map((item) => {
            return (
              <li key={item.id} className="todo-item">
                {item.title}{" "}
                <span onClick={() => handleDelete(item.id)}> X </span>
              </li>
            );
          })}
      </div>
      <div className="todos-form">
        <label className="todos-label" htmlFor="title">
          Todo title
        </label>
        <br />
        <input
          type="text"
          id="title"
          className="todos-input"
          value={title}
          onChange={(e) => handleChange(e)}
        ></input>
        <br />
        <button type="submit" onClick={() => handleClick()}>
          Add
        </button>
      </div>
    </>
  );
};
export default Todos;
