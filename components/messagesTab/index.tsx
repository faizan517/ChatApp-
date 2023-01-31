import { View, Text, Image } from "react-native";
import styles from "./styles";
import React from 'react'

const MessageTab = ({ chatRoom }) => {
  const user = chatRoom.users[1];
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />
      <View style={styles.secondContainer}>
        <View style={styles.thirdContainer}>
          <Text style={styles.namefont}>{user.name}</Text>
          <Text style={styles.font}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.font} numberOfLines={1}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  );
};
export default MessageTab;