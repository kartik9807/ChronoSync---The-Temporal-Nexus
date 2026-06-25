import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom'

const Navbar = () => {
  const { user,logoutUser } = useAuth();

  const handleLogout = async()=>{
      const response = await logoutUser();
      if(!response.success){
        console.log(response.message)
      }
      Navigate('/')
  }

  return (
    <nav className="relative overflow-hidden bg-[#0a0e14] border-b border-cyan-500/10">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 h-full w-[60%] bg-linear-to-r from-transparent via-cyan-500/5 to-transparent animate-[scan_4s_linear_infinite]" />
      </div>

      <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-cyan-500/40" />
      <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-cyan-500/40" />
      <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-cyan-500/40" />
      <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-cyan-500/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-2.5 flex justify-between items-center">

        <div className="flex flex-col">
          <h1 className="font-serif font-semibold text-2xl tracking-[0.18em] bg-linear-to-r from-cyan-400 cursor-pointer to-blue-500 bg-clip-text text-transparent transition-[letter-spacing] duration-300 hover:tracking-[0.26em]">
            CHRONOSYNC
          </h1>
          <span className="font-mono text-sm text-cyan-500/40 tracking-[0.12em]">
            THE TEMPORAL NEXUS
          </span>
        </div>

        <div className="flex items-center gap-4">

          <div className="w-px h-7 bg-linear-to-b from-transparent via-cyan-500/20 to-transparent" />

            <div className="flex items-center gap-2.5">
            <div className="flex flex-col gap-0.5">
                <span className="text-lg font-serif font-bold text-[#8ec5ff] tracking-wide capitalize">
                    {user.username}
                </span>
                <span className="flex cursor-pointer justify-center items-center gap-1 font-mono text-[10px] text-cyan-400 tracking-wide px-2 py-0.5 rounded-sm bg-cyan-500/12 border border-cyan-500/25 hover:bg-cyan-500/20 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {user.clearance}
                </span>
            </div>
            </div>
            <div className="block">
                <button onClick={handleLogout} className="flex items-center gap-1.5 bg-red-500/7 border border-red-500/20 text-red-400/70 hover:text-red-400 hover:bg-red-500/15 text-[10px] tracking-widest px-3 py-1.5 rounded transition-colors">Logout</button>
            </div>
        </div>
      </div>
      
      <div className="relative h-0.5 bg-linear-to-r from-transparent via-cyan-500/15 to-transparent overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-[30%] bg-linear-to-r from-transparent via-cyan-400/60 to-transparent animate-[status-sweep_3s_ease-in-out_infinite]" />
      </div>
    </nav>
  );
};

export default Navbar;