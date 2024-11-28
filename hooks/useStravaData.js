// hooks/useStravaData.js
import { useQuery } from '@tanstack/react-query';
import useStravaStore from '../state/useStravaStore';
import { fetchAthleteStats, fetchAthleteActivities, fetchAthleteData } from '../api/strava';
import { CLIENT_ID } from '../constants';

  // accederr a la info personal del atleta
export const useAthleteData = (accessToken) => {
  console.log('Hook useAthleteData ejecutado, accessToken:', accessToken);
  const athleteData = useStravaStore((state) => state.athleteData);

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['athleteData'],
    enabled: !!accessToken,
    queryFn: () => fetchAthleteData(accessToken),
    onSuccess: (data) => setAthleteData(data),
  });
  return { data, isLoading, error };
};

  // acceder a las estadisticas del atleta
export const useAthleteStats = (CLIENT_ID, accessToken) => {
  const { setAthleteStats } = useStravaStore();

  const {
    data: athleteStats,
    isLoading: isLoadingAthleteStats,
    error: errorAthleteStats,
  } = useQuery({
    queryKey: ['athleteStats'],
    enabled: !!accessToken,
    queryFn: () => fetchAthleteStats(CLIENT_ID, accessToken),
    onSuccess: (data) => setAthleteStats(data),
  });

  return { athleteStats, isLoadingAthleteStats, errorAthleteStats };
};

  // acceder a las actividades del atleta
export const useAthleteActivities = (CLIENT_ID, accessToken) => {
  const { setAthleteActivities } = useStravaStore();

  const {
    data: athleteActivities,
    isLoading: isLoadingAthleteActivities,
    error: errorAthleteActivities,
  } = useQuery({
    queryKey: ['athleteActivities'],
    enabled: !!accessToken,
    queryFn: () => fetchAthleteActivities(CLIENT_ID, accessToken),
    onSuccess: (data) => setAthleteActivities(data),
  });

  return { athleteActivities, isLoadingAthleteActivities, errorAthleteActivities };
};
