import React from 'react'
import { useAuth } from "../context/auth.context.jsx";
import Navbar from '../components/Navbar.jsx';
import TaskDashboard from '../components/tasks/TaskDashboard.jsx';
const Dashboard = () => {
    const {user} = useAuth()
    return (
        <>
            <Navbar/>
            <TaskDashboard/>
        </>
    )
}

export default Dashboard
