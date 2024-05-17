import { useEffect, useState } from 'react';
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';


const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
      let ref = collection(db, c, 'room1', 'messages');

      const unsub = onSnapshot(ref, (snapshot) => {
          let results = []
                  snapshot.docs.forEach(doc => {
                      results.push({...doc.data(), id: doc.id})
                      console.log('results', results)
                  })
                  setDocuments(results)
          console.log('results', results)
      })
      return () => unsub()   
  }, [c])

  return { documents }
}

export default function Home() {

    const { documents: chats } = useCollection('chats')

  return (
    <div>
      {chats && <BookList chats={chats} />}
      <BookForm />
    </div>
  );
}
