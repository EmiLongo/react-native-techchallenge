import { create } from 'zustand';

const useStravaStore = create((set) => ({
  athleteStats: null,
  athleteActivities: null,
  setAthleteStats: (stats) => set({ athleteStats: stats }),
  setAthleteActivities: (activities) => set({ athleteActivities: activities }),
}));

export default useStravaStore;