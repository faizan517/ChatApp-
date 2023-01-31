import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, FlatList } from 'react-native';
import { RootTabScreenProps } from '../types';
import MessageTab from '../components/MessagesTab'
import ChatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
      data={ChatRoomsData}
      renderItem={({item})=><MessageTab chatRoom={item}/>}
      showsVerticalScrollIndicator={false}/>
    </View>
    
  );
}

