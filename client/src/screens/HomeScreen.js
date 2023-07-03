import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ChatList from "../components/ChatList";
import chats from "../../assets/data/chats.json";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={chats}
          renderItem={({ item }) => (
            <ChatList chat={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
        <Entypo
          style={styles.message}
          name='mail-with-circle'
          size={43}
          color='green'
          onPress={() => navigation.navigate('Contacts')}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
   
  },
  message: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginRight: 25,
    bottom: 150,
    right: 10,
    zIndex: 1
  }

});

export default HomeScreen;
