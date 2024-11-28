// components/User.jsx
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AwardsIcon, CalendarTodayIcon, DumbbellIcon, TrendingUpIcon } from '../assets/Icons';
import { Feather } from "@expo/vector-icons";
import useStravaStore from '../state/useStravaStore';
const User = () => {
  const athleteData = useStravaStore((state) => state.athleteData);
  console.log('athleteData en user', athleteData);
  const userData = {
    level: 'Intermedio',
    daysActive: 45,
    completedWorkouts: 38,
    weeklyGoal: 4,
    weeklyProgress: 3,
    stats: [
      { label: 'Calorías Quemadas', value: '12,450' },
      { label: 'Minutos Totales', value: '860' },
      { label: 'Racha Actual', value: '6 días' },
    ],
  };

  const renderStat = ({ item }) => (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{item.value}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{athleteData?.firstname.charAt(0) || 'A'}</Text>
          </View>
          <View>
            <Text style={styles.name}>{athleteData?.firstname} {athleteData?.lastname}</Text>
            <View style={styles.levelContainer}>
              <AwardsIcon />
              <Text style={styles.level}>{userData.level}</Text>
            </View>
          </View>
        </View>

        {/* Estadísticas principales */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <DumbbellIcon />
            <Text style={styles.statValue}>{userData.completedWorkouts}</Text>
            <Text style={styles.statLabel}>Entrenamientos</Text>
          </View>
          <View style={styles.statItem}>
            <CalendarTodayIcon />
            <Text style={styles.statValue}>{userData.daysActive}</Text>
            <Text style={styles.statLabel}>Días Activos</Text>
          </View>
          <View style={styles.statItem}>
            <TrendingUpIcon />
            <Text style={styles.statValue}>Nivel 8</Text>
            <Text style={styles.statLabel}>Experiencia</Text>
          </View>
        </View>

        {/* Meta semanal */}
        <View style={styles.weeklyGoalContainer}>
          <View style={styles.goalHeader}>
            <View style={styles.goalLabel}>
              <Feather name="target" size={18} color="#6b21a8" />
              <Text style={styles.goalText}>Meta Semanal</Text>
            </View>
            <Text style={styles.goalProgress}>
              {userData.weeklyProgress} de {userData.weeklyGoal} entrenamientos
            </Text>
          </View>
        </View>

        {/* Estadísticas adicionales */}
        <FlatList
          data={userData.stats}
          renderItem={renderStat}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={styles.statsGrid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e9d5ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b21a8',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  level: {
    marginLeft: 8,
    fontSize: 14,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 30,
    gap: 30,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  weeklyGoalContainer: {
    margin: 16,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  goalLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalText: {
    marginLeft: 8,
    fontWeight: '500',
  },
  goalProgress: {
    fontSize: 12,
    color: '#6b7280',
  },
//   progressBar: {
//     height: 8,
//     borderRadius: 4,
//   },
  statsGrid: {
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f3e8ff',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
});

export default User;
