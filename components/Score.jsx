import { View, Text, StyleSheet } from "react-native"

const Score = ({score = null, maxScore = 100}) => {
    const getColor = () => {
        const percentage = (score / maxScore) * 100
        if (percentage < 50) {
            return '#fc5200'
        }
        if (percentage < 75) {
            return '#f9d423'
        }
        return '#00ff50'
    }
  return (
    <View style={{backgroundColor: getColor(), borderRadius: 50, width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.score}>{score}</Text>
    </View>
  )
}

export default Score

const styles = StyleSheet.create({
    score: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });