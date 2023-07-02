import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ChatList from "../components/ChatList";
import chats from "../../assets/data/chats.json";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
    paddingTop: 40
  },
  message: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginRight: 25,
    bottom: 50,
    right: 10,
    zIndex: 1
  }

});

export default HomeScreen;
