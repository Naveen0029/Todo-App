import React from 'react'
import './Component2.css'
import {AiTwotoneDelete,AiTwotoneEdit} from "react-icons/ai";
import store from '../redux/store';
import { useSelector,useDispatch } from 'react-redux';
import actions
 from '../redux/actions';
const Component2 = () => {
  const todos = useSelector((state)=>state.todoReducer)
  const dispatch = useDispatch();
  
  return (
    <div className='Container3'>
      {
          todos.map((todo)=>{
              return (
                <div className='Countercontainer'>
                     <h1 key={toString(todo)}>{todo}</h1>
                     <h1 onClick={()=>dispatch(actions.readTodo(todo))}><AiTwotoneEdit /></h1>
                     <h1 onClick={()=>dispatch(actions.deleteTodo(todo))}><AiTwotoneDelete /></h1>
                </div>
              )
          })
      }
    </div>
  )
}

export default Component2
