import React from 'react'
import { useEffect,useState } from 'react';
import { Trash2, Plus, Terminal, Clock } from "lucide-react";

const TaskStats = ({filterTasks,setShowForm}) => {
    const [time, setTime] = useState(()=>Date.now());
    const active = filterTasks.filter(task => task.expirationTimestamp > time).length;
    const expiring = filterTasks.filter(task => { const d = task.expirationTimestamp - time; return d > 0 && d < 43200000; }).length;
    useEffect(() => {
        const interval = setInterval(()=>{
          setTime(Date.now())
        },1000)
        return ()=> clearInterval(interval)
    }, [])
    
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <span className="text-lg font-bold tracking-widest text-cyan-500/70">MISSION TASK MATRIX</span>
        <button
          onClick={() => setShowForm(v => !v)}
          className="flex items-center gap-2 text-cyan-400 border border-cyan-500/30 bg-cyan-500/8 hover:bg-cyan-500/15 text-[13px] tracking-widest px-4 py-2 rounded transition-colors"
        >
          <Plus size={18} /> NEW TASK
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { num: filterTasks.length, label: "TOTAL TASKS" },
          { num: active, label: "ACTIVE", color: "text-cyan-400" },
          { num: expiring, label: "EXPIRING SOON", color: "text-amber-400" },
        ].map(({ num, label, color }) => (
          <div key={label} className="border border-cyan-500/10 bg-cyan-500/10 rounded-md px-4 py-3">
            <div className={`font-serif text-2xl font-semibold ${color || "text-cyan-400"}`}>{num}</div>
            <div className="text-[14px] font-bold text-cyan-500/70 tracking-widest mt-1">{label}</div>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default TaskStats
