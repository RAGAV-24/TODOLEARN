import React,{useState} from 'react'

const TodoInput = ({addc}) => {
  const[input,setInput]=useState("");

  return (
    <div>
      <div className="flex flex-row  bg-amber-300 border-black justify-center items-center p-10">

      <div className="space-x-5 gap-5 w-100 h-10 bg-gray-100 "><input className="w-100 h-10 border-3" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }}></input>
      </div>
      <div className="w-30 h-10 bg-green-400 text-black text-center items-center p-2 rounded-2xl">
      <button className="bg-green-400 text-center items-center" onClick={()=>addc(input)}>ADD TASK</button>
      </div>
      </div>

    </div>
  )
}

export default TodoInput