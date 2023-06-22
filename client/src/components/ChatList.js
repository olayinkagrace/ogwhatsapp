import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatList = ({ chat }) => {
  console.log(chat.user);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.img}
      />
      <View>
        <Text style={styles.bold}>{chat.user.name}</Text>
        <Text style={styles.light} numberOfLines={1}>
          {chat.lastMessage.text}
        </Text>
      </View>
      <View>
        <Text style={styles.time}>{chat.lastMessage.createdAt}</Text>
        <View style={styles.messageIcon}>
          <MaterialCommunityIcons
            name='checkbox-blank-circle'
            size={22}
            color='green'
          />
          <Text style={styles.message}>5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: 'lightgrey'
  },
  bold: {
    fontWeight: "600",
    fontSize: 18,
  },
  light: {
    fontWeight: "normal",
    fontSize: 16,
    color: "grey",
  },
  time: {
    fontWeight: "400",
    fontSize: 12,
    color: "green",
  },

  messageIcon: {
    flexDirection: "row",
    marginLeft: 14,
  },
  message: {
    fontWeight: "300",
    fontSize: 12,
    color: "white",
    marginLeft: -15,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default ChatList;
