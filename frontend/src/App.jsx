import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Dashboard from './pages/Dashboard.jsx'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
