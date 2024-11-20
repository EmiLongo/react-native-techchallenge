import { useRef } from "react";
import { StyleSheet, Image, Text, View  } from "react-native";
import Score from "./Score";

const Card = ({item}) => {
  return (
    <View key={item.slug} style={styles.card}>
    {/* Maneja si no existe una imagen válida */}
      {item.image?.filename ? (
        <Image
          source={{
            uri: `https://www.metacritic.com/a/img/resize/cccacbc533367bac2679d3db98aff72dd8fc663f/catalog/provider/7/2/${item.image.filename}`,
          }}
          style={styles.image}
        />
      ) : (
        <Text style={styles.placeholder}>No Image Available</Text>
      )}

      {/* Muestra el título */}
      <Text style={styles.title}>{item.title || 'Unknown Title'}</Text>

      {/* Muestra la descripción si está disponible */}
      <Text style={styles.slug}>
        {item.slug || 'No description available.'}
      </Text>

      {/* Muestra el puntaje del crítico si existe */}
      <Score score={item.criticScoreSummary?.score ? item.criticScoreSummary.score : null} maxScore={100} >
      </Score>
    </View>
  )
}
export default Card

export function AnimatedCard({ item, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <Card item={item} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
    },
    image: {
      width: 100,
      height: 147,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
    },
  });