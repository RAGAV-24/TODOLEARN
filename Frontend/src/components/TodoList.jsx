import React, { useEffect, useState } from 'react';

const TodoList = ({ func, remove, update }) => {
  const [values, setValue] = useState([]);

  useEffect(() => {
    const r = func();
    console.log(r);
    setValue(r);
  }, [func]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse bg-gray-800 text-white">
          <thead>
            <tr className="bg-gray-700 text-lg">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Text</th>
              <th className="p-3 text-center">Delete</th>
              <th className="p-3 text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {values.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-400">
                  No todos yet...
                </td>
              </tr>
            ) : (
              values.map((e, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-700 hover:bg-gray-600 transition"
                >
                  <td className="p-3 text-sm text-gray-300">{new Date(Number(e.date)).toLocaleString()}</td>
                  <td className="p-3 text-base">{e.Text}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => remove(e.date)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => update(e.date)}
                      className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
