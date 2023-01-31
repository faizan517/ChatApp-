import { View, StyleSheet, FlatList } from "react-native";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";

const ChatRoomScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
      />
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
