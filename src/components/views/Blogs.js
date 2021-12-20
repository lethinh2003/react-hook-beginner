import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/Blogs.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTodoAPI } from "../../redux/actions";
const Blogs = () => {
  const todosList = useSelector((state) => state.apiTodo.todos);
  const dispatch = useDispatch();
  const fetchAPI = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .catch((err) => console.log(err));
    dispatch(setTodoAPI(response.data));
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todosList &&
            todosList.length > 0 &&
            todosList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {item.title}
                    <br />
                    <button type="submit">
                      <Link to={`/react_redux_todo/blogs/${item.id}`}>
                        Detail
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Blogs;
