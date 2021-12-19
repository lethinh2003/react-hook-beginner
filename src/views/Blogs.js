import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Blogs.css";
import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../custom/useFetch";
import CreateBlog from "./CreateBlog";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);
  const { data: dataBlogs, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 9);
      setNewData(data);
    }
  }, [dataBlogs]);
  const updateData = (blog) => {
    let data = newData;
    data.unshift(blog);

    setShow(false);
    setNewData(data);
  };

  return (
    <>
      <Button
        style={{ margin: "20px 0" }}
        variant="primary"
        onClick={handleShow}
      >
        Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateBlog updateData={updateData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {isLoading === false &&
            newData &&
            newData.length > 0 &&
            newData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {item.title}
                    <br />
                    <button type="submit">
                      <Link to={"/react-hook-beginner/blogs/" + item.id}>
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
