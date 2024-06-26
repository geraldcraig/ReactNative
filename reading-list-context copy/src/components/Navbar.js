import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { AuthContext } from "../context/AuthContext";


const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}

const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        signOut(auth)
        .then(() => {
            console.log('user signed out')
            dispatch({ type: 'LOGOUT' })
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return { logout }
}

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li onClick={logout}>Logout</li>
      </ul>
    </nav>
  )
}
