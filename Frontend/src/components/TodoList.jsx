import React, { useEffect, useState } from 'react';

const TodoList = ({ func,remove,update }) => {
  const [values, setValue] = useState([]);

  useEffect(() => {
  const r = func();
  console.log(r);
  setValue(r);
}, [func]);


  return (
    <div className="flex flex-col justify-center items-center ">
    <div className=" w-100 ">


    <div className="bg-black text-white font-bold">
      <table  gap={6} border={4} className="p-10 border-amber-300">
        <thead>
          <tr>
            <th>Date</th>
            <th>Text</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {values.map((e, i) => (
            <tr key={i}>
              <td>{e.date}</td>
              <td>{e.Text}</td>
              <td><div className="bg-yellow-200 hover:bg-blue-400  text-black"><button onClick={()=>remove(e.date)}>Delete</button></div></td>
              <td><div className="bg-yellow-200 hover:bg-blue-400  text-black"><button onClick={()=>update(e.date)}>Update</button></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default TodoList;
