import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatList = ({ chat, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: chat.user.image,
          }}
          style={styles.img}
        />
        <View style={styles.content}>
          <Text style={styles.bold}>{chat.user.name}</Text>
          <Text style={styles.light} numberOfLines={1}>
            {chat.lastMessage.text}
          </Text>
        </View>
        <View>
          <Text style={styles.time}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: 'lightgrey'
  },
  content: {
    flex: 1
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
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default ChatList;
