import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ChatListItem from "@/components/ChatListItem";
import Chats from '../../components/Chats';

const ChatDetails = () => {
    const { id } = useLocalSearchParams();
    const chat = chats.find((c) => c.id === id);

    if (!chat) {
        return <Text>Chat not found</Text>;
    }

    return (
        <ChatListItem chat={chat} />
    );
}

export default ChatDetails;