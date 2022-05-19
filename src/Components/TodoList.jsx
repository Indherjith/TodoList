import React from 'react'

const TodoList = ({todos,delitem}) => {
  console.log(todos)
  return(
    <>
    <div style={{border:"2px solid black",padding:"10px",backgroundColor:"lightblue",width:"200px",margin:"auto",marginTop:"10px"}}>
      <h3>Your TODO List</h3>
      {
      todos.map((item)=>(
        <div style={{display:"flex",border:"2px solid blue",width:"200px",margin:"auto",marginBottom:"10px"}} key={item.id}>
          <p style={{padding:"0px 10px"}}>{item.value}</p>
          <button style={{height:"20px",margin:"0px 10px",marginTop:"18px"}} onClick={()=>delitem(item.id)}>delete</button>
        </div>
      ))
    }
    </div>
    
    </>
  )
}

export default TodoList
