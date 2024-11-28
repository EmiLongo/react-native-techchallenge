import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Footer from '../../components/Footer';
import useAuthStore from '../../state/authStore';
import Header from '../../components/Header';

export default function Layout() {
  const { isAuth } = useAuthStore();

  return (
    <View style={styles.container}>
      <Header />
      <Slot />
      {isAuth && <Footer />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
