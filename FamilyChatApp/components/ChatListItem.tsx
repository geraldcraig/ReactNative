import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type ChatListItemProps = {
    item: {
        id: string;
        firstName: string;
        lastName: string;
        message: string;
    };
};

function ChatListItem({ item }: ChatListItemProps) {
    return (
        <Link href={`/chats/${item.id}`} asChild>
            <Pressable style={styles.chatContainer}>
                <View style={styles.chatInfo}>
                    <Text style={styles.userName}>{item.firstName} {item.lastName}</Text>
                    <Text style={styles.lastMessage}>{item.message}</Text>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    chatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        color: '#555',
    },
    timestamp: {
        color: '#777',
    },
    image: {
        borderRadius: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        height: 50,
        width: 50,
        marginRight: 10
    }
});

export default ChatListItem;