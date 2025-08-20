import React, { useEffect, useState } from 'react';

const TodoList = ({ func,remove }) => {
  const [values, setValue] = useState([]);

  useEffect(() => {
  const r = func();
  console.log(r);
  setValue(r);
}, [func]);


  return (
    <div className="bg-black text-white font-bold">
      <table border={4}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Text</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {values.map((e, i) => (
            <tr key={i}>
              <td>{e.date}</td>
              <td>{e.Text}</td>
              <td><div className="bg-yellow-200 text-black"><button onClick={()=>remove(e.date)}>Delete</button></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
