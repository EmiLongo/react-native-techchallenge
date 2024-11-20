import React, { useEffect, useRef } from "react";
import { StyleSheet, Image, Text, View, Animated } from "react-native";
import { useRouter } from "expo-router";

const welcome = require("../assets/welcome.webp");
const logo = require("../assets/logo_vandalia.png");
const logoLetras = require("../assets/logo-vandalia-letras.png");

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Image source={welcome} style={styles.image} />
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Image source={logoLetras} />
      </View>
    </View>
  );
};

export const AnimatedFirstPage = () => {
  const opacity = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    // Animación de fade-out
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start(() => {
      router.replace("/group/login");
    });
  }, [opacity, router]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <FirstPage />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000", // Fondo para evitar huecos
  },
  image: {
    width: "100%", // Ancho completo de la pantalla
    height: "100%", // Alto completo de la pantalla
    position: "absolute", // Imagen en el fondo
  },
  logoContainer: {
    position: "absolute",
    bottom: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
