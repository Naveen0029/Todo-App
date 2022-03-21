import React from 'react'
import './Component2.css'
import {AiTwotoneDelete,AiTwotoneEdit} from "react-icons/ai";

const Component2 = ({todos,callTodo}) => {

  let editIt = (todo)=>{
    callTodo(todo);
    
  }
  return (
    <div className='Container3'>
      {
          todos.map((todo)=>{
              return (
                <div className='Countercontainer'>
                     <h1 key={toString(todo)}>{todo}</h1>
                     <h1 onClick={()=>editIt(todo)}><AiTwotoneEdit /></h1>
                     <h1><AiTwotoneDelete /></h1>
                </div>
              )
          })
      }
    </div>
  )
}

export default Component2
