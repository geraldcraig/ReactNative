import {useState} from "react";
import {collection, doc, getDocs, getFirestore} from "firebase/firestore";

export default function Chats() {
    const [userData, setUserData] = useState([]);

    const chats = async function getChats() {
        try {
            const db = getFirestore();
            const chatsRef = collection(db, 'chats');

            const chatSnap = await getDocs(chatsRef);

            if (!chatSnap.empty) {
                const chatList = chatSnap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUserData(chatList);
            } else {
                setUserData([]);
            }

        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    }

}
