import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#016064" translucent={false} />
            <View style={styles.wrapper}>
                <Text style={styles.brandName}>Whatsapp Business</Text>
                <View style={styles.iconWrapper}>
                    <Ionicons  name="camera-outline" size={26} color="white" />
                    <Ionicons style={styles.ellipsis} name="ellipsis-vertical" size={18} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#016064',
        justifyContent: 'space-between',
        paddingVertical: 16,
        marginBottom: 10
    },
    brandName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 20
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ellipsis: {
        marginHorizontal: 20
    }
})


export default Header
