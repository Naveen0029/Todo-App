import React from 'react'
import { useState } from 'react'
import { useEffect,useRef } from 'react';
import './Component1.css'
import actions from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils';

const Component1 = (props) => {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    let readData= useSelector((state)=>state.readReducer);
    //let [prev,setPrev] = useState('');
    console.log(readData);
    
    useEffect(()=>{
     // setPrev(readData);
      
      setInput(readData);
      
    },[readData])

    
    let changeIt = (e)=>{
      e.preventDefault();
        setInput(e.target.value)
    }

    
    let submitIt = () =>{
      if(readData!==''){
        dispatch(actions.editTodo(readData,input));
      }
      else
      dispatch(actions.addTodo(input))

       setInput('');
       dispatch(actions.readTodo(''));
    }

    
  return (
    <div className='Container2'>
        
           <input type='text' value={input} onChange={changeIt}/>
           <button type="submit" onClick={submitIt} className='Btn1'>Add</button>
   
    </div>
  )
}

export default Component1
