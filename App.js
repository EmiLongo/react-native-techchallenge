import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { getLatestGames } from './lib/metacritic';

export default function App() {
  const [games , setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    })
  })
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {games?.map((game) => {
          return (
            <View key={game.slug}>
              <Image source={{ uri: game.image }} style={{ width: 200, height: 200 }} />
              <Text>{game.title}</Text>
              <Text>{game.score}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
