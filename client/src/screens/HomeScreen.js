import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import ChatList from "../components/ChatList";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />

      <Button
        title={"ChatScreen"}
        onPress={() => navigation.navigate("ChatScreen")}
      />
    </ScrollView>
  );
};

export default HomeScreen;
