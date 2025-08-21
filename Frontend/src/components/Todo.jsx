import React from 'react'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList"
import axios from "axios";
import {useState,useEffect} from 'react';
const Todo = () => {
  const [values, setValues] = useState([]);
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/task/fetchall");
      setValues(res.data);
      console.log("Tasks loaded:", res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);
  const add = async (e) => {
    load();
    const r = { date: Date.now(), Text: e }
    try {
      const req = await axios.post("http://localhost:3000/api/task/add", r)
      console.log(req.msg);
    }
    catch (err) {
      console.log("Error in adding the task", err)
    }
    const task = await axios.get("http://localhost:3000/api/task/fetchall")
    console.log(task);
    setValues(task.data);
  }
  useEffect(() => {

    console.log("hi", values);
  }, [values]);
  const load = () => {
    console.log("gg");
    return values;
  }
  const remove = async (e) => {
    try {
      await axios.delete("http://localhost:3000/api/task/delete", { data: { date: e } });
      console.log("e is successfully deleted");
      await fetchTasks();
    }
    catch (err) {
      console.log(err);
    }

    load();

  }
  // useEffect(() => {
  //   fetchTasks();
  // }, [values]);
  const update = async (date) => {
    const newText = window.prompt("Enter new text:");
    if (newText) {
      await axios.put("http://localhost:3000/api/task/update", { date: date, updatedtask: newText })
      console.log("updation is done successfully");
      await fetchTasks();
    }

    load();

  }
  return (

    <div>
      <TodoInput  addc={add} />

      <TodoList func={load} remove={remove} update={update} />

    </div>
  )
}

export default Todo