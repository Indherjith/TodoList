import React, { useState } from 'react'

const Todoinput = ({addtodo}) => {
    const [value,setvalue]=useState("");
  return (
    <div>
        <input type="text" placeholder='Enter Todo' value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={()=>{addtodo(value); setvalue("")}}>Add</button>
    </div>
  )
}

export default Todoinput
 