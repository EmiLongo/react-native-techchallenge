// components/Main.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CyclingIcon, MountainIcon, RunningIcon, WalkingIcon } from '../assets/Icons';
import { useAthleteData } from '../hooks/useStravaData';
import useStravaStore from '../state/useStravaStore';
import useAuthStore from "../state/authStore";

const ActivityMenu = () => {
  // const { isAuth, setAuth, accessToken, login, logout, restoreTokens } = useAuthStore();

  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useAthleteData(accessToken);

  const { athleteData } = useStravaStore();
  console.log('athleteData', athleteData);
  const [firstname, setFirstname] = useState(null);
  

  // Efecto para asegurar que obtenemos el `firstname`
  useEffect(() => {
    if (data && data.firstname) {
      // Si los datos ya están en el estado global
      setFirstname(data.firstname);
    } 
  }, [data]);

  const activities = [
    {
      icon: <WalkingIcon />,
      name: "Caminar",
      description: "Actividad de bajo impacto",
      caloriesBurned: "200-300 cal/hora",
    },
    {
      icon: <RunningIcon />,
      name: "Correr",
      description: "Cardio de alta intensidad",
      caloriesBurned: "600-800 cal/hora",
    },
    {
      icon: <CyclingIcon />,
      name: "Ciclismo",
      description: "Ejercicio cardiovascular",
      caloriesBurned: "400-600 cal/hora",
    },
    {
      icon: <MountainIcon />,
      name: "Senderismo",
      description: "Ejercicio al aire libre",
      caloriesBurned: "350-500 cal/hora",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Hola, {firstname}!</Text>
        <Text style={styles.subtitle}>Elige tu Actividad</Text>
        <View style={styles.activities}>
          {activities.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={styles.iconContainer}>{activity.icon}</View>
              <View style={styles.textContainer}>
                <Text style={styles.activityName}>{activity.name}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
                <Text style={styles.calories}>{activity.caloriesBurned}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ir</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
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
    textAlign: 'center',
    color: '#6b21a8',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6b21a8',
    marginBottom: 16,
  },
  activities: {
    marginTop: 8,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3e8ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  iconContainer: {
    display: 'flex',
    width: 50,
    height: 50,
    backgroundColor: '#e9d5ff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4c1d95',
  },
  activityDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  calories: {
    fontSize: 12,
    color: '#9333ea',
  },
  button: {
    backgroundColor: '#6b21a8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ActivityMenu;
