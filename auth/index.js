import {authorize, refresh} from 'react-native-app-auth';

const config = {
  clientId: '140609',
  clientSecret: '5d225af5738549e5b08da8b8b9ec9fc7b0d34b98',
  redirectUrl: 'myapp://redirect',
  scopes: ['activity:read_all', 'activity:write'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.strava.com/oauth/authorize',
    tokenEndpoint: 'https://www.strava.com/api/v3/oauth/token',
    revocationEndpoint: 'https://www.strava.com/oauth/deauthorize',
  },
};

export {authorize, refresh, config};


const loginWithStrava = async () => {
    try {
      const result = await authorize(config);
      console.log('Access Token:', result.accessToken);
      console.log('Refresh Token:', result.refreshToken);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  const refreshToken = async (refreshToken) => {
    try {
      const newTokens = await refresh(config, {refreshToken});
      console.log('New Access Token:', newTokens.accessToken);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };
  
  export { loginWithStrava, refreshToken };  