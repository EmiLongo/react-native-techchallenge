import { View, StyleSheet, Pressable } from "react-native"
import { CalendarIcon, RunningMenuIcon, UserIcon } from "../assets/Icons";
import { useLocalSearchParams, useRouter } from "expo-router";

const Footer = () => {
  const { route } = useLocalSearchParams();
  console.log(route);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={route === 'history' ? styles.buttonSelected : styles.button}
      onPress={() => {router.push('/group/history')}}>
        <CalendarIcon />
      </Pressable>
      <Pressable style={route === 'main' ? styles.buttonSelected : styles.button}
      onPress={() => {router.push('/group/main')}}
      >
        <RunningMenuIcon />
      </Pressable>
      <Pressable style={route === 'user' ? styles.buttonSelected : styles.button}
      onPress={() => {router.push('/group/user')}}
      >
        <UserIcon />
      </Pressable>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 90,
      margin: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      paddingHorizontal: 12,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button: {
      width: 40,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSelected: {
      width: 70,
      height: 70,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fc520040',
      borderRadius: 50,
  } 
});