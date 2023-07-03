import React from 'react'
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import chats from "../../assets/data/chats.json";
import { Feather } from '@expo/vector-icons';
import StatusComponent from '../components/StatusComponent';
import { Ionicons } from '@expo/vector-icons'; import { MaterialCommunityIcons } from '@expo/vector-icons';


const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.main}>
        <View style={styles.wrapper}>
          <View style={styles.paperClip}>
            <MaterialCommunityIcons name="human-male-female-child" size={24} color="black" />
          </View>
          <View>
            <Text style={styles.name}>My status</Text>
            <Text style={styles.whatsAppText}>Yesterday, 12:08pm</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-horizontal" size={24} color="green" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.bell}>
        <View style={styles.bellContent}>
          <Ionicons name="md-megaphone-sharp" size={14} color="grey" />
          <Text style={styles.bellText}>Boost Status</Text>
        </View>
      </View>
      <Text style={styles.whatsAppText}>Recent updates</Text>
      <FlatList
        data={chats}
        renderItem={({ item }) => <StatusComponent user={item} />}
        style={{ backgroundColor: "white" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapper: {
    flexDirection: "row",
    padding: 20,
    alignItems: 'center',

  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20
  },
  qr: {
    alignSelf: 'flex-end',
    marginLeft: 130
  },
  whatsAppText: {
    color: 'grey',

    marginLeft: 20
  },
  paperClip: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 20
  },
  bell: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  bellContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellText: {
    color: 'grey',
    marginLeft: 10
  }
})

export default StatusScreen
