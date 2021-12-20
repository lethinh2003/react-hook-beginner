import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../assets/styles/Blogs.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getTodoAPIDetail, removeTodoAPIDetail } from "../../redux/actions";
const DetailBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  let history = useHistory();
  function handleClick() {
    history.push("/react_redux_todo/blogs");
  }
  const todosDetail = useSelector((state) => state.apiTodo.todos);
  const dispatch = useDispatch();
  const fetchAPI = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .catch((err) => console.log(err));
    setIsLoading(false);
    dispatch(getTodoAPIDetail(response.data));
  };
  useEffect(() => {
    fetchAPI();

    return () => {
      dispatch(removeTodoAPIDetail());
    };
  }, []);

  return (
    <>
      {isLoading === true && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {isLoading === false && todosDetail && (
        <>
          <button type="submit" onClick={() => handleClick()}>
            Back to Blogs
          </button>

          <div className="detail" key={todosDetail.id}>
            <div className="detail-title">Title: {todosDetail.title}</div>
            <div className="detail-user">User-Id: {todosDetail.userId}</div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailBlogs;
