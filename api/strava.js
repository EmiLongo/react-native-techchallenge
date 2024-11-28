// api/strava.js

import { BASE_URL, CLIENT_CODE, CLIENT_ID, CLIENT_SECRET, TOKEN } from "../constants";

export const fetchAthleteData = async (accessToken) => {
  if (!accessToken) {
    console.error("No se proporcionó un accessToken válido.");
    throw new Error("El token de acceso es requerido para realizar esta operación.");
  }
  console.log("fetchAthleteData se esta ejecutando, accessToken:", accessToken);

  const response = await fetch(
    `${BASE_URL}athlete`,
    // `${BASE_URL}athlete?client_id=${CLIENT_ID}&code=${CLIENT_CODE}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code`,
    { method: "GET", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
     }
  );

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Error fetching athlete data: ${errorDetails.message}`);
  }

  return response.json();
};

export const fetchAthleteStats = async (athleteId, accessToken) => {
  const response = await fetch(
    `${BASE_URL}athletes/${CLIENT_ID}/stats`,
    { method: "GET", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      }
  );

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Error fetching athlete stats: ${errorDetails.message}`);
  }

  return response.json();
};

export const fetchAthleteActivities = async (accessToken) => {
  const response = await fetch(
    `${BASE_URL}athlete/activities`,
    { method: "GET", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
     }
  );

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Error fetching athlete activities: ${errorDetails.message}`);
  }

  return response.json();
};