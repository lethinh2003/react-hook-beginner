import { useState } from "react";
import '../views/Todos.css'

const Todos = () => {

    const [todosList, setTodosList] = useState([
        {id: 1, title: "Hoc bai"},
        {id: 2, title: "Choi game"},
        {id: 3, title: "Hoc lap trinh"},
    ])
    const [title, setTitle] = useState('');
    const handleClick = () => {
        if (!title) return;
        let currentTodos = todosList;
        const titleInput = {
            id: Math.floor(Math.random()*1000),
            title: title,
        }; 
        setTodosList([...currentTodos, titleInput]);
        setTitle('');
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
      
    }
    const handleDelete = (id) => {
        let currentTodos = todosList;
       const newTodos = currentTodos.filter((item) => {
            return item.id !== id;
          
        })
        setTodosList(newTodos);
    }
    
    return(
        <>
        <div className="todos-container">

        {todosList.length > 0 && todosList.map((item) => {
            return(
                <li key={item.id} className="todo-item">{item.title} <span onClick={() => handleDelete(item.id)}> X </span></li>
            )
        })}
     
        </div>
        <div className="todos-form">
            <label className="todos-label" htmlFor="title">Todo title</label><br />
            <input type="text" id="title" className="todos-input" value={title} onChange={(e) => handleChange(e)}></input><br />
            <button type="submit" onClick={() => handleClick()}>Add</button>
        </div>
        </>
    );

}
export default Todos;