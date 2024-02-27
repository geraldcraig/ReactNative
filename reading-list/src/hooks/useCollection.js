import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        let ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
                    snapshot.docs.forEach(doc => {
                        results.push({...doc.data(), id: doc.id})
                        console.log('results', results)
                    })
                    setDocuments(results)
            console.log('results', results)
        })
        return unsub()
    }, [c]);
    return { documents }
}