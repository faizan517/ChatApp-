import { View, Text, Image, } from "react-native";
import TouchableRippleEffect from "../RippleEffect";
import styles from "./styles";


const MessageTab = ()=>{
    return(
        <View style={styles.mainContainer}>
      <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg'}} style={styles.image}/>
      <View style={styles.secondContainer}>
        <View style={styles.thirdContainer}>
          <Text style={styles.namefont}>Faizan</Text>
          <Text style={styles.font}>11:00</Text>
        </View>
        <Text style={styles.font} numberOfLines={1} >Hola hola coca cola?</Text>
      </View>
    </View>
    )

}
export default MessageTab;