import { useContext, useEffect, useRef, useState } from 'react';
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}

const useCollection = (c, _q) => {
    const [documents, setDocuments] = useState(null);

    const q = useRef(_q).current

    useEffect(() => {
        let ref = collection(db, c);

        if (q) {
            ref = query(ref, where(...q))
        }

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
    }, [c, q])

    return { documents }
}

export default function Home() {
  const { user } = useAuthContext();
  
    const { documents: books } = useCollection(
      'books',
      ['uid', '==', user.uid]
      )

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
