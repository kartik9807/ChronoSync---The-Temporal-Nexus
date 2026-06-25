import { useEffect } from "react";
import { createContext,useState,useContext } from "react";
const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true)
    const checkSession = async()=>{
        try{
            const a = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`,{credentials:"include"});
            const res = await a.json()
            if(res.success){
                setuser(res.data)
            }
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false)
        }
    }

    const loginUser = async(formData)=>{
        const a = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            credentials:"include",
            body:JSON.stringify(formData)
        })
        const res = await a.json();
        if(res.success){
            setuser(res.data)
        }
        return res
    }

    const logoutUser = async()=>{
        const a = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`,{
            method:"POST",
            credentials:"include",
        })
        const res = await a.json();
        if(res.success){
            setuser(null)
        }
        return res;
    }

    useEffect(() => {
        const init = async ()=>{
            await checkSession();
        }
        init();
    }, [])
    
    return(
        <AuthContext.Provider value={{user,loginUser,loading,logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}