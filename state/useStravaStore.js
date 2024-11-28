// useStravaStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStravaStore = create(
  persist(
    (set) => ({
      athleteData: null,
      athleteStats: null,
      athleteActivities: null,
      setAthleteData: (data) => set({ athleteData: data }),
      setAthleteStats: (stats) => set({ athleteStats: stats }),
      setAthleteActivities: (activities) => set({ athleteActivities: activities }),
    }),
    {
      name: 'stravaStore',
      storage: AsyncStorage,
    }
  )
);

export default useStravaStore;