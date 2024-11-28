const BASE_URL = 'https://www.strava.com/api/v3/';
const AUTHORIZATION_URL = 'https://www.strava.com/oauth/';
// const AUTHORIZATION_URL = 'https://www.strava.com/oauth/mobile/authorize';
const DESAHUTHORIZATION_URL = 'https://www.strava.com/oauth/deauthorize';
const REDIRECT_URI = 'https://react-native-techchallenge.expo.dev';
// https://www.strava.com/oauth/token?client_id=140609&client_secret=5d225af5738549e5b08da8b8b9ec9fc7b0d34b98&refresh_token=fc35a178c64cc851581ea291314b4906e8408c6e&grant_type=refresh_token

const CLIENT_ID = '140609';
const CLIENT_SECRET = '5d225af5738549e5b08da8b8b9ec9fc7b0d34b98';
// const CLIENT_CODE = 'b1e74f53e90d5d5a118ecb5f0afe03b5621ffffe'; // read
const CLIENT_CODE = '870069a9f1fcaf40d2a83e6b215ed5880271eb3d'; // read_all

const REDIRECT_URL = 'developers.strava.com';
const REFRESH_TOKEN = 'fc35a178c64cc851581ea291314b4906e8408c6e';
const SCOPES = [
  'read', 
  'read_all', 
  'profile:read_all',
  'profile:write',
  'activity:read',
  'activity:read_all', 
  'activity:write'
];

export { BASE_URL, AUTHORIZATION_URL, DESAHUTHORIZATION_URL, CLIENT_ID, CLIENT_SECRET, CLIENT_CODE, REDIRECT_URL, REFRESH_TOKEN, SCOPES };