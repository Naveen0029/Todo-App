import React from 'react'
import ReactDOM from 'react'
import { useState } from 'react'
import Component1 from './components/Component1'
import Component2 from './components/Component2'

const App = () => {

  const [arr,setArr] = useState([]);
  const [Input,setInput] = useState('');//we pass it in compo1
                                       //it helps in showing input 
                                       //in input field

  
  const callBack = (prevVal,newVal)=>{//callback for editing
      console.log(prevVal);
      console.log(newVal);
     
      if(newVal!==''){
        if(prevVal!==''){
          setArr(
           
              arr.map((value)=>(value===prevVal?newVal:value))
            
          )
          
        }
        else
        setArr((prev)=>[...prev,newVal])
      }
      
      
  }
  const callTodo = (todo)=>{//it helps in showing text in input field
    console.log(todo);
    setInput(todo);
  }

  const deleteTodo = (todo)=>{//callback for deleting existing todo on which clicked
    setArr(arr.filter((value)=>(value!==todo)));
  }
  console.log(arr);
 
  return (
    <div>
      <Component1 callBack={callBack} Input={Input} />
      <Component2 todos={arr} callTodo={callTodo} deleteTodo={deleteTodo} />
      
    </div>
  )
}

export default App
