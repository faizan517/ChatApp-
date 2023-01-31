import { Ionicons } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";


const MessageInput = () => {
    return(
        <View style={styles.container}>
            <View style={styles.messageConatiner}>
            <TextInput style={styles.input}
            placeholder="Message" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}><Ionicons name="send" size={21} color="white" /></Text>
            </TouchableOpacity>

        </View>
    )
}
export default MessageInput;

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    messageConatiner:{
        backgroundColor:'#f2f2f2',
        flex:1,
        borderRadius:100,
        margin:1,
        justifyContent:'center'

    },
    button:{
        height:50,
        width:50,
        backgroundColor: '#3355FE',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        color:'white',
        opacity:9
    },
    input:{
        marginLeft:10
    }
})
