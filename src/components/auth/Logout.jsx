import React from 'react'
import logout from '../../assets/icons/logout.svg'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        navigate('/login')
    }
  return (
    <button className="icon-btn" onClick={handleLogout}>
          <img src={logout} alt="Logout" />
        </button>
  )
}
