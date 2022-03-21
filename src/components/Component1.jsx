import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import './Component1.css'

const Component1 = (props) => {
    const [input,setInput] = useState('');

    useEffect(()=>{
      setInput(props.Input);
    },[props.Input]);
    console.log(`I am in componetn1${props.Input}`)

    


    let changeIt = (e)=>{
        setInput(e.target.value)
    }

    
    let submitIt = () =>{
    
    
        props.callBack(input);
        setInput('');
    }

    
  return (
    <div className='Container2'>
        
           <input type='text' value={input} onChange={changeIt}/>
           <button type="submit" onClick={submitIt} className='Btn1'>Add</button>
   
    </div>
  )
}

export default Component1
