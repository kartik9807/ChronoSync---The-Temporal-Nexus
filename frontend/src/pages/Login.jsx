import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../context/auth.context.jsx";
import { toastConfig } from "../utils/toastConfig.jsx";
const Login = () => {
  const {loginUser,user} = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username:"",
    password:""
  })
  const handleChange = async(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("loginPage",user)
    let result = await loginUser(formData);
    if(result.success){
        navigate('/dashboard',{ viewTransition: true });
        console.log(result.data)
    }else{
      toast.error("Invalid Credentials",toastConfig);
    }
    setFormData({
      username:"",
      password:""
    })
  }
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <div className="bg-[#1c1917] shadow-3xl min-h-[90vh] flex  m-8 rounded-3xl text-white border-4 border-stone-800">
        <div className="hidden lg:block relative w-1/2 p-2 border-r-3 border-stone-800 ">
          <img
            src="bg.jpeg"
            alt=""
            className="inset-0 w-full h-full opacity-80 rounded-3xl"
          />
          <div className="absolute bottom-10 left-10 z-10">
            <h1 className="text-4xl font-extrabold tracking-wider text-white/55">
              CHRONOSYNC
            </h1>
            <p className="text-slate-300 mt-2 ml-1">Temporal Nexus Interface</p>
            <p className="text-slate-400 text-sm mt-2 ml-1">
              Synchronizing timeline...
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center gap-4 items-center flex-col">
          <header>
            <h1 className="text-shadow-[0_0_30px_rgba(34,211,238,0.5)] text-center tracking-wider font-bold text-3xl font-serif bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Login</h1>
            <h3 className="text-xl  font-medium text-slate-500">Enter your credentials to access your account</h3>
          </header>
          <form className="space-y-6 w-[60%]" autoComplete="off" onSubmit={handleSubmit}>

            <div>
              <label className="block mb-2 text-zinc-400">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-5 py-3 bg-white/5 border border-cyan-500/20 rounded-xl backdrop-blur-md text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none transition"
                onChange={handleChange}
                value={formData.username}
                name="username"
              />
            </div>

            <div>
              <label className="block mb-2 text-zinc-400">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-5 py-3 bg-white/5 border border-cyan-500/20 rounded-xl backdrop-blur-md text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none transition"
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
            </div>

            <div className="flex items-center gap-2 text-cyan-400 text-sm">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
              Awaiting Authentication
            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                font-semibold
                tracking-wider
                uppercase
                hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Initialize Session
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
