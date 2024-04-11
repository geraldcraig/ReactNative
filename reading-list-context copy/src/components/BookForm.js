import { useContext, useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { AuthContext } from "../context/AuthContext";


const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}

export default function BookForm() {
  const [newBook, setNewBook] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newBook)

    await addDoc(collection(db, 'books'), {
      title: newBook,
      uid: user.uid
    })

    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
