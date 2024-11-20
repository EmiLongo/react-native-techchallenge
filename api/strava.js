// api/strava.js
export const fetchAthleteStats = async (athleteId, accessToken) => {
    const response = await fetch(
      `https://developers.strava.com/api/athletes/${athleteId}/stats`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Error fetching athlete stats');
    }
  
    return response.json();
  };
  
  export const fetchAthleteActivities = async (accessToken) => {
    const response = await fetch(
      'https://developers.strava.com/athlete/activities',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Error fetching athlete activities');
    }
  
    return response.json();
  };
  