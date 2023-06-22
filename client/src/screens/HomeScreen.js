import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import ChatList from "../components/ChatList";

const chat = {
  id: "1",
  user: {
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    name: "Olayinka",
  },
  lastMessage: {
    text: "how are you doing guy?",
    createdAt: "07:37",
  },
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ChatList chat={chat} />
      <Button
        title={"ChatScreen"}
        onPress={() => navigation.navigate("ChatScreen")}
      />
    </ScrollView>
  );
};

export default HomeScreen;
