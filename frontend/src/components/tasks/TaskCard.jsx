import React from 'react'
import { Trash2, Clock } from "lucide-react";
import { getExpiryInfo, getCardBorder, CLEARANCE_STYLES } from "../../utils/taskUtils";
import { useEffect,useState } from 'react';
const TaskCard = ({task,isConfirming,onDeleteClick,onDeleteConfirm,onDeleteCancel,pendingDelete,index}) => {
    const [time, setTime] = useState(()=>Date.now());
    const exp = getExpiryInfo(task.expirationTimestamp,time);
    const borderCls = getCardBorder(task.expirationTimestamp);

    useEffect(() => {
        const interval = setInterval(()=>{
        setTime(Date.now())
        },1000)
        return ()=> clearInterval(interval)
    }, [])
  return (
        <>
        <div key={Number((task.id).split('_')[1])} className={`border border-l-4 border-cyan-500/10 bg-white/4 hover:bg-cyan-500/4 rounded-md px-4 py-3.5 transition-colors ${borderCls}`}>
        <div className="flex justify-between items-start gap-3 mb-2">
            <span className="text-[12px] text-cyan-500/75 tracking-widest">#TASK-{index+1}</span>
            <div className="flex gap-2 flex-wrap">
            <span className={`text-[10px] tracking-wider border px-2 py-0.5 rounded-sm ${CLEARANCE_STYLES[task.clearanceRequired]}`}>
                {task.clearanceRequired}
            </span>
            {exp.style && (
                <span className={`text-[12px] tracking-wider border px-2 py-0.5 rounded-sm ${exp.style}`}>{exp.label}</span>
            )}
            </div>
        </div>
        <p className="text-[13px] text-slate-300/80 leading-relaxed mb-3">{task.description}</p>
        <div className="flex justify-between items-center">
            {!exp.style && (
            <span className="text-[12px] text-cyan-500/75 flex items-center gap-1">
                <Clock size={13} /> {exp.label}
            </span>
            )}
            <div className="ml-auto">
            {isConfirming?(
                <div className="border border-red-500/25 bg-[#0d1420] rounded-lg px-5 py-4 mb-4 flex justify-between items-center">
                <span className="text-[11px] text-red-400/80 tracking-wider mr-2">⚠ CONFIRM DELETION OF TASK-{index+1} — THIS IS IRREVERSIBLE.</span>
                <div className="flex gap-3">
                    <button onClick={onDeleteCancel} className="cursor-pointer border border-white/20 text-white/40 text-[12px] px-3 py-1.5 rounded">CANCEL</button>
                    <button onClick={onDeleteConfirm} className="cursor-pointer bg-red-500/10 border border-red-500/40 text-red-400 text-[12px] px-3 py-1.5 rounded">DELETE</button>
                </div>
                </div>
            ):(
                <button
                onClick={onDeleteClick}
                className="cursor-pointer flex items-center gap-1.5 bg-red-500/7 border border-red-500/20 text-red-400/70 hover:text-red-400 hover:bg-red-500/15 text-[10px] tracking-widest px-3 py-1.5 rounded transition-colors"
                >
                <Trash2 size={11} /> DELETE
                </button>
            )}
            </div>
        </div>
        </div>
        </>
  )
}

export default TaskCard
