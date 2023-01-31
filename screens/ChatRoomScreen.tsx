import { View, StyleSheet, FlatList , SafeAreaView } from "react-native";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

const ChatRoomScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        showsVerticalScrollIndicator={false}
      />
      <MessageInput/>
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
