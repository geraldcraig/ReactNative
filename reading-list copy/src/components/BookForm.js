import { useState } from 'react'

import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function BookForm() {
  const [newBook, setNewBook] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newBook)

    await addDoc(collection(db, 'chats', 'room1', 'messages'), {
      message: newBook,
      timestamp: "timestamp"
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
