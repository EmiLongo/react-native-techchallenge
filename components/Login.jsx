import { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Pressable, Image } from "react-native";
import useAuthStore from '../state/authStore';
import { useRouter } from 'expo-router';
import { LogoStrava } from '../assets/Icons.jsx';

const Login = () => {
  const { isAuth, setAuth, accessToken, login, logout, restoreTokens } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    // Hay que terminar de configurar la app para usar el Oauth
    // try {
    //   await login();
    //   setAuth(true);
    //   router.push("/group/main");
    // } catch (error) {
    //   console.error('Error durante el inicio de sesión:', error);
    //   Alert.alert('Error', 'No se pudo iniciar sesión con Strava');
    // }

    // Simulación de inicio de sesión exitoso
    setAuth(true)
    router.push("/group/main");
  };

    // Restaurar tokens al iniciar la app
    // useEffect(() => {
    //   restoreTokens();
    // }, [restoreTokens]);

    useEffect(() => {
      if (isAuth) {
        router.push("/group/main");
      }
    }, []);

  return (
    <View style={styles.container}>
      <View>
        <LogoStrava width={120} height={30} />
        <Text style={styles.subtitle}>Iniciar Sesión con Strava.com</Text>
      </View>
      <Text style={styles.title}>Selecciona una cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={handleLogin} style={{ backgroundColor: '#fc5200', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login with Strava</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f9f9f9',

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Color del texto
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 20,
    color: "#333", // Color del texto
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
});

