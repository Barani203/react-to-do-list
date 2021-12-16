import logo from './logo.svg';
import './App.css';
import Add from './add';
import { useState } from 'react';
import "./add.css"
function App() {
  const [value, setvalue] = useState([]);

  let handleClick = () => {
     setvalue([...value,`  Task  ${value.length}`])
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-white">
            <div class="card-body">
              <form action="javascript:void(0);">
               
                <button  class="form-control add-task btn-primary" onClick={handleClick}>ADD</button>
              </form>
              <ul class="nav nav-pills todo-nav">
                <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
              </ul>
              <div class="todo-list">
               {
                 value.map((item) =>  <Add data ={item}></Add>)
               }
            

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


