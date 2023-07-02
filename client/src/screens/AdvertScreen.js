import React from 'react'
import { Button, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import AdvertComponent from '../components/advertComponent'
import { Ionicons } from '@expo/vector-icons';

const AdvertScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Grow your business</Text>
      <View style={styles.box}>
        <View style={styles.icon}>
          <Ionicons name="md-megaphone" size={24} color="grey" />
        </View>
        <Text style={styles.boxHeader}>Create your first ad</Text>
        <Text style={styles.text} >Reach new customers on Facebook & Instagram with ads that lead to WhatsApp</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Get started</Text>
        </TouchableOpacity>

      </View>
      <Text style={styles.text}>Business tools</Text>
      <AdvertComponent
        iconName={"home"}
        textBold={"Business Profile"}
        textLight={"manage address, hours and websites"}
      />
      <AdvertComponent
        iconName={"dots-grid"}
        textBold={"Catalogue"}
        textLight={"show products and services"}
      />
      <AdvertComponent
        iconName={"speaker-wireless"}
        textBold={"Business Profile"}
        textLight={"manage address, hours and websites"}
      />
      <AdvertComponent
        iconName={"clipboard-account"}
        textBold={"Facebook and Instagram"}
        textLight={"Add Whatsapp to your accounts"}
      />
      <AdvertComponent
        iconName={"sticker-emoji"}
        textBold={"Greeting message"}
        textLight={"Welcome new customers automatically"}
      />
      <AdvertComponent
        iconName={"umbrella-beach-outline"}
        textBold={"Away message"}
        textLight={"Reply automatically when you are away"}
      />
      <AdvertComponent
        iconName={"lightning-bolt"}
        textBold={"Quick replies"}
        textLight={"Reuse frequuent messages"}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'grey',
    fontSize: 16,
    padding: 20
  },
  box: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  boxHeader: {
    fontWeight: '600',
    fontSize: 18
  },
  btn: {
    borderRadius: 20,
    backgroundColor: '#016068',
    padding: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
    paddingHorizontal: 20,
    marginBottom: 10

  },
  btnText: {
    color: 'white',

  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default AdvertScreen
