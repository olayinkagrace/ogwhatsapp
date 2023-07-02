import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import chats from "../../assets/data/chats.json";
import { Feather } from '@expo/vector-icons';
import CallComponent from "../components/CallComponent";

const CallScreen = () => {
  return (
    <View  style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.paperClip}>
          <Feather name="paperclip" size={24} color="white" />
          </View>
        <View>
        <Text style={styles.name}>Create call link</Text>
      <Text style={styles.whatsAppText}>Share a link for your Whatsapp call</Text>
        </View>
       
      </TouchableOpacity>
      <Text style={styles.whatsAppText}>Recent</Text>
      <FlatList
        data={chats}
        renderItem={({ item }) => <CallComponent user={item} />}
        style={{ backgroundColor: "white" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
  wrapper: {
    flexDirection: "row",
    padding: 20,
    alignItems:'center',

  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20
  },
  qr: {
    alignSelf: 'flex-end',
    marginLeft: 130
  },
  whatsAppText: {
    color: 'grey',
    
    marginLeft: 20
  },
  paperClip: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default CallScreen;
