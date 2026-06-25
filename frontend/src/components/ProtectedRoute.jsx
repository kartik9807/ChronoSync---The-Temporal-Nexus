import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth.context'
const ProtectedRoute = ({children}) => {
    const {loading,user} = useAuth()
    if(loading){
        return <h1>Loading...</h1>
    }
    console.log("protectedRoute",user)
    if(!user){
        return <Navigate to='/' />;
    }
    return children;
}

export default ProtectedRoute
