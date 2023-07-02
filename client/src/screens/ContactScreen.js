import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ContactComponent from "../components/ContactComponent";
import chats from "../../assets/data/chats.json";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const ContactScreen = () => {
  return (
    <View  style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <FontAwesome name='user-circle' size={44} color='green' />
        <Text style={styles.name}>New group</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
      <MaterialIcons name="contact-phone" size={44} color="green" />
        <Text style={styles.name}>New contact</Text>
        <MaterialIcons name="qr-code" size={34} color="grey" style={styles.qr} />
      </TouchableOpacity>
      <Text style={styles.whatsAppText}>Contacts on WhatsApp</Text>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ContactComponent user={item.user} />}
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
  }
});

export default ContactScreen;
