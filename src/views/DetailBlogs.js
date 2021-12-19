import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./styles/Blogs.css";
import useFetch from "../custom/useFetch";
const DetailBlogs = () => {
  const { id } = useParams();
  let { data, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  let history = useHistory();

  function handleClick() {
    history.push("/blogs");
  }

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
      {isLoading === false && data && (
        <>
          <button type="submit" onClick={() => handleClick()}>
            Back to Blogs
          </button>

          <div className="detail" key={data.id}>
            <div className="detail-title">Title: {data.title}</div>
            <div className="detail-user">User-Id: {data.userId}</div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailBlogs;
