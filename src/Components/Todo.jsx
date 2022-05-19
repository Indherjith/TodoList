import React from 'react'
import Todoinput from './Todoinput';
import TodoList from './TodoList';


const Todo= () => {
    const [todos,settodos]=React.useState([]);
    const addtodo=(value)=>{
      let parot = {id:Date.now(),value:value}
      todos.push(parot)
      settodos([...todos]);
      // console.log(todos);
    }

    const delitem=(id)=>{
      let newtodo = todos.filter((item)=> item.id !== id)
      settodos(newtodo)
    }
  return (
    <div>
        <Todoinput addtodo={addtodo}  />
        <TodoList todos={todos} delitem={delitem} />
    </div>
  )
}

export default Todo