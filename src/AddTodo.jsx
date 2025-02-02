/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AddTodo.css"
import { useState } from 'react';
export default function AddTodo({updateTodo}){
  let [todo , setTodo] = useState("")


 
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(todo)
    updateTodo(todo)
    setTodo("")

  }
  let handleTodoChange = (event) =>{
    setTodo(event.target.value)
    
  }

  return(
    <div className='addTodo'>
      <h1>Add todo</h1>
      <form onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Enter Task" variant="standard" value={todo} onChange={handleTodoChange} required />
      <br /><br />
      <Button variant="contained" type='submit'>Add Task</Button>
      </form>
    </div>
  )
}