import { StyleSheet, Image, Text, View, Animated } from "react-native";
const logoLetras = require("../assets/logo-vandalia-letras.png");

const Header = () => {
    return (
        <View style={styles.container}>
          <Image source={logoLetras} style={styles.image} />
          <Text style={styles.text}>
            Trainning
          </Text>
        </View>
      );
}

export default Header

const styles = StyleSheet.create({
    container: {
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        gap: 20,
        backgroundColor: '#f9f9f9',

    },
    image: {
        width: 140,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})