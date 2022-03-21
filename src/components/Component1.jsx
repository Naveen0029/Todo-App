import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import './Component1.css'

const Component1 = (props) => {
    const [input,setInput] = useState('');
    let [prevVal,setPrevVal] = useState('');

    useEffect(()=>{
      console.log('I am useEffect');
      if(prevVal==='')//prevVal must be collected because 
                      //we check where it exists in arr
      setPrevVal(props.Input);

      setInput(props.Input);
    },[props.Input]);


    let changeIt = (e)=>{
      e.preventDefault();
        setInput(e.target.value)
    }

    
    let submitIt = () =>{
        console.log(prevVal);
        if(input!==''){
        props.callBack(prevVal,input);//prev and newval must 
                                      //be passed for editing
        setInput('');
        setPrevVal('');
        }
    }

    
  return (
    <div className='Container2'>
        
           <input type='text' value={input} onChange={changeIt}/>
           <button type="submit" onClick={submitIt} className='Btn1'>Add</button>
   
    </div>
  )
}

export default Component1
