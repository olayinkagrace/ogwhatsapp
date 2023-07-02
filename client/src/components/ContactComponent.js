import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";


const ContactComponent = ({ user }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: user.image }} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.status} numberOfLines={1}>
            {user.status}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
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
    fontWeight: "bold",
    fontSize: 18,
  },
  status: {
    fontWeight: "normal",
    fontSize: 16,
    color: "grey",
  },
});

export default ContactComponent;
