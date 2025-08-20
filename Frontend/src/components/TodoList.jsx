import React, { useEffect, useState } from 'react';

const TodoList = ({ func }) => {
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
          </tr>
        </thead>
        <tbody>
          {values.map((e, i) => (
            <tr key={i}>
              <td>{e.date}</td>
              <td>{e.Text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
