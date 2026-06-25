import React from 'react'
import { useState } from 'react';
import { CLEARANCE_STYLES } from '../../utils/taskUtils';

const TaskFilter = ({tasks,filterLevel,setFilterLevel,filterTasks}) => {
    
  return (
    <>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="text-[14px] text-cyan-500/75 tracking-widest mr-1">FILTER:</span>
        {["ALL", "LEVEL_1", "LEVEL_2", "LEVEL_3", "LEVEL_4", "LEVEL_5"].map(lvl => (
            <button
            key={lvl}
            onClick={() => setFilterLevel(lvl)}
            className={`text-[12px] tracking-wider border px-3 py-1 rounded-sm transition-colors
                ${filterLevel === lvl
                ? lvl === "ALL"
                    ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-300"
                    : `${CLEARANCE_STYLES[lvl]}`
                : "border-white/10 text-white/50 hover:text-white/60 hover:border-white/20"
                }`}
                >
                    {lvl}
            </button>
            ))}

            {filterLevel !== "ALL" && (
            <span className="text-[12px] text-cyan-500 ml-auto">
                {filterTasks.length} / {tasks.length} TASKS
            </span>
            )}
        </div>
    
    </>
  )
}

export default TaskFilter
