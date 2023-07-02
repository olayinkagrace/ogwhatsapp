import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const StatusComponent = ({ user }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: user.user.image }} style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.user.name}</Text>
        <Text style={styles.time}>
            {dayjs(user.lastMessage.createdAt).fromNow()}
          </Text>
       
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: 'center'
  },
  info: {
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontWeight: '600'
  },
  time: {
    color: 'grey'
  }
});

export default StatusComponent;
