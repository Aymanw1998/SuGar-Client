import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({ navigation }) => {
    const openMenu = () => {
        navigation.navigate('Menu')
    }

    return (
        <View style={styles.header}>
            <Text>hi</Text>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}></MaterialIcons>
            {/* <Image style={styles.menuicon} source={require("../assets/menu-icon.png")} /> */}
        </View>
    );
}

export default Header;


const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#eee',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        position: 'absolute',
        left: 16
    }
});

