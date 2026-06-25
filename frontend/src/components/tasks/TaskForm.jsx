import React from 'react'
import { useState } from 'react';
import { Terminal } from 'lucide-react'
const TaskForm = ({open,onClose,onSubmit}) => {
    const [form, setForm] = useState({ description: "", clearanceRequired: "LEVEL_3", expirationTimestamp: "" });
    if(!open) return null
    const handleSubmit = ()=> {
        if (!form.description.trim()) return;
        onSubmit({
            ...form,
            expirationTimestamp: form.expirationTimestamp? new Date(form.expirationTimestamp).getTime():Date.now() + 600000,// 10min
        },
            onClose()
        );
        setForm({ description: "", clearanceRequired: "LEVEL_3", expirationTimestamp: "" });
        onClose()
    }
  return (
    <>
        <div className="border border-cyan-500/20 bg-[#0d1420] rounded-lg p-5 mb-5 relative overflow-hidden">
          <div className="flex items-center gap-2 text-cyan-400 text-[12px] tracking-widest mb-4">
            <Terminal size={14} /> REGISTER NEW TASK
          </div>
          <textarea
            className="w-full bg-cyan-500/4 border border-cyan-500/15 rounded text-[12px] text-slate-200 p-2.5 mb-3 font-mono resize-none h-16 outline-none focus:border-cyan-500/40 transition-colors placeholder-slate-600"
            placeholder="Describe the mission objective..."
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          />
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[10px] text-cyan-500/45 tracking-widest mb-1.5">CLEARANCE REQUIRED</label>
              <select
                className="w-full bg-cyan-500/4 border h-10 border-cyan-500/15 rounded text-[12px] text-white p-2 font-mono outline-none focus:border-cyan-500/40"
                value={form.clearanceRequired}
                onChange={e => setForm(f => ({ ...f, clearanceRequired: e.target.value }))}
              >
                {["LEVEL_1","LEVEL_2","LEVEL_3","LEVEL_4","LEVEL_5"].map(l => <option key={l} className="bg-sky-900">{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-cyan-500/45 tracking-widest mb-1.5">EXPIRATION DATE -- <span className="text-cyan-500/75">(Default - 10min)</span></label>
              <input
                type="datetime-local"
                className="w-full bg-cyan-500/4 border border-cyan-500/15 rounded text-[12px] text-slate-200 p-2 font-mono outline-none focus:border-cyan-500/40"
                value={form.expirationTimestamp}
                onChange={e => setForm(f => ({ ...f, expirationTimestamp: e.target.value }))}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={onClose} className="border border-white/10 text-white/40 hover:text-white/70 text-[11px] tracking-widest px-3 py-1.5 rounded transition-colors">CANCEL</button>
            <button onClick={handleSubmit} className="bg-cyan-500/10 border border-cyan-500/35 text-cyan-400 hover:bg-cyan-500/20 text-[11px] tracking-widest px-4 py-1.5 rounded transition-colors">ADD TASK</button>
          </div>
        </div>
    
    </>
  )
}

export default TaskForm
