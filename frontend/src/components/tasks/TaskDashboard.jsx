import { useState, useEffect } from "react";
import { Trash2, Plus, Terminal, Clock } from "lucide-react";
import { ToastContainer } from 'react-toastify';
import { getCardBorder,CLEARANCE_STYLES,getExpiryInfo } from "../../utils/taskUtils.jsx"
import { useTask } from "../../hooks/taskController.jsx";
import TaskFilter from "./TaskFilter.jsx";
import TaskStats from "./TaskStats.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";
const TaskDashboard = () => {
    const {tasks,createTask,deleteTask} = useTask()
    const [filterLevel, setFilterLevel] = useState("ALL")
    const [showForm, setShowForm] = useState(false);
    const filterTasks = filterLevel === "ALL"?tasks:tasks.filter((task)=>task.clearanceRequired === filterLevel);
    const [pendingDelete, setPendingDelete] = useState(null);

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
                theme="dark"
            />
            <div className="bg-[#0a0e14] min-h-screen p-6 font-mono text-slate-200">

                <TaskFilter tasks={tasks} setFilterLevel={setFilterLevel} filterLevel={filterLevel} filterTasks={filterTasks}/>
                <TaskStats filterTasks={filterTasks} setShowForm={setShowForm} />
                <TaskForm onSubmit={createTask} onClose={()=>setShowForm(false)} open={showForm}/>
                {filterTasks.length === 0 ? (
                    <div className="border border-dashed border-cyan-500/10 rounded-lg py-10 text-center text-[12px] text-cyan-500/25 tracking-widest">
                        NO TASKS IN QUEUE — SYSTEM IDLE 
                    </div>
                ) : (
                    <div className="flex flex-col gap-5">
                        {filterTasks.sort().map(((task,index)=>{
                            return (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    isConfirming={pendingDelete === task.id}
                                    pendingDelete = {pendingDelete}
                                    onDeleteClick={()=>setPendingDelete(task.id)}
                                    onDeleteConfirm={()=>{deleteTask(task.id);setPendingDelete(null)}}
                                    onDeleteCancel={()=>setPendingDelete(null)}
                                />
                            )
                    }))}
                    </div>
                )
            }
            </div>
        </>
    )
}

export default TaskDashboard
