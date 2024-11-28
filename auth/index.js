// auth/index.js
import {authorize, refresh} from 'react-native-app-auth';
import { AUTHORIZATION_URL, DESAHUTHORIZATION_URL, BASE_URL, CLIENT_ID, CLIENT_SECRET, CLIENT_CODE, REDIRECT_URL, REDIRECT_URI, SCOPES, REFRESH_TOKEN } from '../constants';

// result: {
//   "token_type": "Bearer",
//   "expires_at": 1732773552,
//   "expires_in": 6055,
//   "refresh_token": "e7b6dcaee8c652ec53def8bc30b6dd19e8920b63",
//   "access_token": "c08561a36657ad835634b1d1d9d817115065ed31",
//   "athlete": {
//       "id": 152488351,
//       "username": null,
//       "resource_state": 2,
//       "firstname": "Emiliano",
//       "lastname": "Longo",
//       "bio": null,
//       "city": null,
//       "state": null,
//       "country": null,
//       "sex": "M",
//       "premium": false,
//       "summit": false,
//       "created_at": "2024-11-19T23:00:58Z",
//       "updated_at": "2024-11-20T05:27:27Z",
//       "badge_type_id": 0,
//       "weight": null,
//       "profile_medium": "https://lh3.googleusercontent.com/a/ACg8ocI717hfQVh17Zmfh7fHRowCo9gE3g30DCXjWN-XNxJNQnkHrA=s96-c",
//       "profile": "https://lh3.googleusercontent.com/a/ACg8ocI717hfQVh17Zmfh7fHRowCo9gE3g30DCXjWN-XNxJNQnkHrA=s96-c",
//       "friend": null,
//       "follower": null
//   }
// }

const loginWithStrava = async () => {
  try {
    const response = await fetch(
      `${AUTHORIZATION_URL}token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${CLIENT_CODE}&grant_type=authorization_code`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Access Token:', data.access_token);
    console.log('Refresh Token:', data.refresh_token);
    console.log('Response:', data);

    return data;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};
  
  const refreshToken = async () => {
    try {
      const response = await fetch(`${AUTHORIZATION_URL}token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('Access Token:', data.access_token);
      console.log('Response:', data);
  
      return data;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null; // Devuelve un valor predeterminado o maneja el error de otra manera
    }
  };
  
  export { loginWithStrava, refreshToken };  