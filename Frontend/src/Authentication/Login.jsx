import React from 'react'
import { BiLogIn } from "react-icons/bi";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {email,password});

    console.log("User login successful:", response.data);
    navigate("/todo");
  } catch (err) {
    console.error("Error at login:", err);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">

      <div className="text-center px-4 py-10 w-[420px] bg-black text-blue-300 rounded-lg">
        <h1 className="text-5xl font-bold">Login</h1>
      </div>

      {/* Image Container */}
      <div className="flex flex-row text-center px-4 py-10 ">
        <div>
          <img src="/login.png" alt="Login" className="w-full h-auto object-contain" />
        </div>
        <div className="flex flex-col bg-black text-white text-bold items-center justify-center w-120 h-138">
          <p className="text-bold text-blue-400 text-4xl">Email

          </p>
          <input value={email} className="text-shadow-amber-500 bg-gray-400 rounded-4xl text-center h-10 w-50" placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}></input>
          <p className="text-bold text-blue-400 text-4xl">Password

          </p>
          <input value={password} className="text-shadow-amber-500 bg-gray-400 rounded-4xl text-center h-10 w-50" placeholder='Enter your Password'
            onChange={(e) => { setPassword(e.target.value) }}></input>
          <div className="pt-10  ">

            <button className="flex flex-row w-30 text-center content-center items-center justify-center text-s h-15 rounded-full bg-gray-300 hover:bg-yellow-400 text-black hover:text-blue-600"
              onClick={handleClick}>
              Login In <BiLogIn size={30} />

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
