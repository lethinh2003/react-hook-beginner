import '../views/Blogs.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../custom/useFetch';
import {
    Link
  } from "react-router-dom";
  

const Blogs = () => {
    let { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/todos');
  let newData =  data.filter(item => item.id<=10);


       
  

    return(
        <>
     

        {isLoading === true && 
                
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            
        }
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titie</th>
                    
                </tr>
            </thead>
            <tbody>
            

           {isLoading === false && newData && newData.length > 0 
           && newData.map((item) => {
               return (
                   
                <tr key={item.id}>

<td>{item.id}</td>
<td>{item.title}<br/>
<button type="submit"><Link to={"/blogs/" + item.id}>Detail</Link></button>
</td>
</tr>
               )
                 
           })}
            
           
            
                
            </tbody>
        </table>

        
</>
    )

}
export default Blogs;