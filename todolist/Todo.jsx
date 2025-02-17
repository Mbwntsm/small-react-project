import React from 'react'
import './style.css'
import { useState } from 'react'

const Todo = () => {
  const [Todos,setTodos] = useState([]);
  const [input, setInput] =useState("");

  const handlesubmit=()=>{
    setTodos((Todos)=>{
    return  Todos.concat({
        text: input,
        id: Math.floor(Math.random()*10),
      });
    });
    setInput("");
  }
  const removeTodo =id => setTodos((Todos)=>Todos.filter((t)=>t.id!=id));
   


  return (
    <div className='container'>
      <input type="text" placeholder='new todo' value={input} onChange={e=>setInput(e.target.value)} />
      <button onClick={handlesubmit}>submit</button>
      <div>
        <ul className='todos-list'>
          {Todos.map(({text,id})=>(
            <li className='todo' key={id}>
              <span>{text}
              </span>
              <button className="close" onClick={()=>removeTodo(id)}>x</button>
            </li>
          ))}

        </ul>
      </div>
    </div>
    
  )
}

export default Todo