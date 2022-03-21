import React from 'react'
import ReactDOM from 'react'
import { useState } from 'react'
import Component1 from './components/Component1'
import Component2 from './components/Component2'

const App = () => {

  const [arr,setArr] = useState([]);
  const [Input,setInput] = useState('');

  
  const callBack = (value)=>{
    
      setArr((prev)=>[...prev,value])
      
  }
  const callTodo = (todo)=>{
    console.log(todo);
    setInput(todo);
  }
  console.log(arr);
 
  return (
    <div>
      <Component1 callBack={callBack} Input={Input} />
      <Component2 todos={arr} callTodo={callTodo} />
      
    </div>
  )
}

export default App
