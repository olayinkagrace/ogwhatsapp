import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AdvertComponent = ({textBold, textLight, iconName}) => {
  return (
    <View style={styles.wrapper}>
        <MaterialCommunityIcons name={iconName} size={24} color="grey" style={styles.icon} />
        <View>
            <Text style={styles.bold}>{textBold}</Text>
            <Text style={styles.par}>{textLight}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontSize: 17,
    fontWeight: 400
  },
  par : {
    fontSize: 14,
    color: 'grey'
  },
icon: {
    padding: 26
}
})


export default AdvertComponent
