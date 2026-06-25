import { useState,useEffect } from "react";
import { toast } from 'react-toastify';
import { toastConfig } from "../utils/toastConfig";

export function useTask() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const data = async ()=>{
            let a = await fetch(`${import.meta.env.VITE_API_URL}/api/nexus/tasks`,{credentials:"include"})
            const res = await a.json();
            setTasks(res.tasks)
        }
        data()
    }, []);

    const createTask = async (newTask,onClose) => {
        try{
            const created = await fetch(`${import.meta.env.VITE_API_URL}/api/nexus/tasks`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                credentials:"include",
                body:JSON.stringify(newTask)
            })
            const res = await created.json();
            if(!res.success){
                toast.error(`${res.message}`,toastConfig);
                return;
            }
            setTasks(res.tasks)
            toast.success("Task added successfully",toastConfig);
            onClose()
        }catch(err){
            console.log(err)
        }
    }

    const deleteTask = async (id) => {
        try{
            const task = tasks.find((task)=>task.id === id)
            const a = await fetch(`${import.meta.env.VITE_API_URL}/api/nexus/tasks/${id}`,{
              method:"DELETE",
              credentials:"include",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify(task),
            })
            const res = await a.json();
            if(!res.success){
              toast.error(`${res.message}`, toastConfig);
              return;
            }
            setTasks(res.tasks);
        }catch(err){
            console.log(err)
        }
    };
    return {tasks,createTask,deleteTask}
}