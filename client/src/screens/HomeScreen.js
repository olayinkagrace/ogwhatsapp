import React from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import ChatList from "../components/ChatList";
import chats from "../../assets/data/chats.json";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
  },
});

export default HomeScreen;
