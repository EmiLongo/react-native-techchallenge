import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LocationOutlineIcon, MountainIcon, TimeOutlineIcon } from '../assets/Icons';

const ActivityHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  // si quisiera levantar los datos con la api de strava y guardarlos en el store
  // useStravaData(athleteId, accessToken);
  // const { athleteStats, athleteActivities } = useStravaStore();

  // datos hardcodeados
  const monthlyStats = [
    {
      month: "Noviembre 2024",
      totalDistance: 124.5,
      totalTime: "12h 45m",
      totalElevation: 1850,
      activities: [
        {
          name: "Senderismo Monte Alto",
          date: "2024-11-15",
          distance: 18.2,
          time: "3h 15m",
          elevationGain: 650,
        },
        {
          name: "Carrera Matutina",
          date: "2024-11-10",
          distance: 12.5,
          time: "1h 10m",
          elevationGain: 120,
        },
      ],
    },
    {
      month: "Octubre 2024",
      totalDistance: 98.3,
      totalTime: "10h 20m",
      totalElevation: 1420,
      activities: [
        {
          name: "Ciclismo Ruta Verde",
          date: "2024-10-22",
          distance: 45.6,
          time: "2h 30m",
          elevationGain: 320,
        },
      ],
    },
  ];

  const renderMonthlyActivities = (monthData) => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{monthData.month}</Text>
          <TouchableOpacity onPress={() => setSelectedMonth(null)}>
            <Text style={styles.backButton}>Volver</Text>
          </TouchableOpacity>
        </View>
        {monthData.activities.map((activity, index) => (
          <View key={index} style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityTitle}>{activity.name}</Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
            </View>
            <View style={styles.activityDetails}>
              <View style={styles.activityDetail}>
                <LocationOutlineIcon />
                <Text style={styles.detailText}>{activity.distance} km</Text>
              </View>
              <View style={styles.activityDetail}>
                <TimeOutlineIcon />
                <Text style={styles.detailText}>{activity.time}</Text>
              </View>
              <View style={styles.activityDetail}>
                <MountainIcon />
                <Text style={styles.detailText}>{activity.elevationGain} m</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderMonthlyOverview = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Historial de Actividades</Text>
        {monthlyStats.map((month, index) => (
          <TouchableOpacity
            key={index}
            style={styles.overviewCard}
            onPress={() => setSelectedMonth(month)}
          >
            <View style={styles.overviewHeader}>
              <Text style={styles.overviewTitle}>{month.month}</Text>
            </View>
            <View style={styles.activityDetails}>
              <View style={styles.activityDetail}>
                <LocationOutlineIcon />
                <Text style={styles.detailText}>{month.totalDistance} km</Text>
              </View>
              <View style={styles.activityDetail}>
                <TimeOutlineIcon />
                <Text style={styles.detailText}>{month.totalTime}</Text>
              </View>
              <View style={styles.activityDetail}>
                <MountainIcon />
                <Text style={styles.detailText}>{month.totalElevation} m</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  return selectedMonth
    ? renderMonthlyActivities(selectedMonth)
    : renderMonthlyOverview();
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6b21a8',
    marginBottom: 16,
    textAlign: 'center',
  },
  overviewCard: {
    backgroundColor: '#f3e8ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  overviewHeader: {
    marginBottom: 8,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4c1d95',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b21a8',
  },
  backButton: {
    fontSize: 14,
    color: '#6b21a8',
  },
  activityCard: {
    backgroundColor: '#f3e8ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4c1d95',
  },
  activityDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  activityDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#6b21a8',
    marginLeft: 4,
  },
});

export default ActivityHistory;
