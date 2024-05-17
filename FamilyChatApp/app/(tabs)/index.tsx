import { FlatList } from 'react-native';
import ChatListItem from '@/components/ChatListItem';

type ChatListItemProps = {
    item: {
        id: string;
        firstName: string;
        lastName: string;
        message: string;
    };
};

export default function HomeScreen() {
  return (
      <FlatList
          data={chats}
          renderItem={({ item }) => <ChatListItem item={item} />}
      />
  );
}

