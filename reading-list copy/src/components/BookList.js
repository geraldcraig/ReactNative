import { db } from '../firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';

export default function BookList({ chats }) {

  const handleClick = async (id) => {
    console.log(id)
    const docRef = doc(db, 'chats', id);
    await deleteDoc(docRef)
  }

  return (
    <div className="book-list">
      <ul>
        {chats.map(chat => (
          <li key={chat.id} onClick={() => handleClick(chat.id)}>{chat.message}</li>
        ))}
      </ul>
    </div>
  )
}