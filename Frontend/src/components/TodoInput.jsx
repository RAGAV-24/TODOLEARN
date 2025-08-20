import React,{useState} from 'react'

const TodoInput = ({addc}) => {
  const[input,setInput]=useState("");

  return (
    <div>
      <div className="bg-amber-300 border-black">
      <input value={input} onChange={(e)=>{
        setInput(e.target.value)
      }}></input>
      </div>
      <button onClick={()=>addc(input)}>ADD TASK</button>
    </div>
  )
}

export default TodoInput