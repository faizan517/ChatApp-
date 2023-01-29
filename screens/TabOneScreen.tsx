import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Image, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import MessageTab from '../components/messagesTab'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <MessageTab/>
      <MessageTab/>
      <MessageTab/>
      <MessageTab/>
      <MessageTab/>
      <MessageTab/>
      <MessageTab/>
    </ScrollView>
    
  );
}

