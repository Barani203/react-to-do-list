import "./add.css"
import { useState } from "react";

export default function Add (props) {

 
       const [visible,setvisible] = useState(true);
    let handleDelete = () => {
           setvisible(false)
    }
    {
        if (visible === true) {
            return <div className="todo-item">
            <span>{props.data}</span>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleDelete} style={{marginLeft:"700px"}}>Delete</button>
          </div>
        }else{
            return <div></div>
        }
    }
} 