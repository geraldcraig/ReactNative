import { useContext, useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}

const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = (email, password) => {
        setError(null);

        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log('user logged in:', res.user)
            dispatch({ type: 'LOGIN', payload: res.user })
        })
        .catch((err) => {
            setError(err.message)
        })
    }

    return { error, login }
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    console.log(email, password)
  }
  
  return (
    <div>
      <h2>Login</h2>
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
        <button>log in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
