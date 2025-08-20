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
  const remove=(e)=>{
    setValues(values.filter((k)=>(k.date!=e)))
    load();

  }
 const update = (date) => {
  const newText = window.prompt("Enter new text:");
  if (newText) {
    setValues(values.map(item =>
      item.date === date ? { ...item, Text: newText } : item
    ));
  }

     load();

  }
  return (
    <div>
      <Input addc={add} />

    <List func={load} remove={remove} update={update} />
    </div>
  )
}

export default App