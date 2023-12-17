import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoIcon from '../assets/logo/logo-icon.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const FooterNav = () => {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name="account-group-outline" size={50} color="black" />
        <Image source={logoIcon} style={styles.logoIcon}/>
        <Ionicons name="person-circle-outline" size={50} color="black" />
    </View>
  )
}

export default FooterNav;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    logoIcon: {
        height: 50,
        width: 50,
    },
    logoText: {
        fontSize: 25,
        marginLeft: 10,
        // fontFamily: 'LeagueGothic-Regular',
    },
});