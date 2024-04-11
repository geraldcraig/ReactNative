import { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}

const useSignup = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = (email, password) => {
        setError(null);

        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log('user signed up:', res.user)
            dispatch({ type: 'LOGIN', payload: res.user })
        })
        .catch((err) => {
            setError(err.message)
        })
    }

    return { error, signup }
}

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    signup(email, password)
  }
  
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
