import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatList = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        }}
        style={styles.img}
      />
      <View>
        <Text style={styles.bold}>Bubble Share</Text>
        <Text   style={styles.light} numberOfLines={1}>
          How abbbbbb hhh jhn n
        </Text>
      </View>
      <View>
        <Text style={styles.time}>10:29 pm</Text>
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
    fontWeight: 'normal',
    fontSize: 16,
    color: 'grey'
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
