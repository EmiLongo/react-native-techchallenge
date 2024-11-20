// hooks/useStravaData.js
import { useQuery } from '@tanstack/react-query';
import useStravaStore from '../store/useStravaStore';
import { fetchAthleteStats, fetchAthleteActivities } from '../api/strava';

export const useStravaData = (athleteId, accessToken) => {
  const { setAthleteStats, setAthleteActivities } = useStravaStore();

  useQuery(
    ['athleteStats', athleteId],
    () => fetchAthleteStats(athleteId, accessToken),
    {
      onSuccess: (data) => setAthleteStats(data),
    }
  );

  useQuery(
    ['athleteActivities'],
    () => fetchAthleteActivities(accessToken),
    {
      onSuccess: (data) => setAthleteActivities(data),
    }
  );
};
