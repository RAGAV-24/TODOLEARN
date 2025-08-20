import React from 'react'
import Input from  "./components/TodoInput"
import { useState,useEffect } from 'react';
import List from "./components/TodoList"
const App = () => {
  const[values,setValues]=useState([]);

  const add=(e)=>
  {
    load();
    const r={date:Date.now(),Text:e}
  setValues([...values,r]);
  // console.log(values);
  }
   useEffect(() => {

    console.log("hi", values);
  }, [values]);
  const load=()=>{
    console.log("gg");
    return values;
  }
  return (
    <div>
      <Input addc={add} />

    <List func={load} />
    </div>
  )
}

export default App