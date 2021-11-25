import './CreateBlog.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
const CreateBlog = (props) => {
    const [userid, setUserid] = useState('');
    const [title, setTitle] = useState('');
 
    const handleSubmit = async () => {
        if (!userid) return;
        if (!title) return;
        const addData = {
            userId: userid,
            title: title,
            completed: false
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', addData)
      
        if (response && response.data) {
            
            let newData = response.data;
            props.updateData(newData);
            
}

      

    }
    
    useEffect(() => {
        
        const invalid = document.querySelector(".userid-invalid"); 
        if (!userid) {
            
            invalid.style.display= "block";
        } else {
            invalid.style.display= "none";
        }

    },[userid]);

    useEffect(() => {
        
        const invalid = document.querySelector(".title-invalid"); 
        if (!title) {
            
            invalid.style.display= "block";
        } else {
            invalid.style.display= "none";
        }

    },[title]);
    
return(
    <>
    <div className="form-container">

    <div className="form-input">
        <label htmlFor="userid">User-id</label>
        <p className="userid-invalid" style={{"color": "red", "display": "none"}}>Invalid User-Id</p>
        <input type="number" id="userid" value={userid} onChange={(e)=> setUserid(e.target.value)}></input>
    </div>    
    <div className="form-input">
        <label htmlFor="title">Title</label>
        <p className="title-invalid"  style={{"color": "red", "display": "none"}}>Invalid Title</p>
        <input type="text" id="title" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
    </div>
    <button type="submit" onClick={handleSubmit}>Submit</button>    
    </div>

     
    </>
)
}
export default CreateBlog;