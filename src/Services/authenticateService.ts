import {
    AUTH_ENDPOINT,
    CLIENT_ID,
    REDIRECT_URI,
    SCOPES,
  } from '../Services/API/configApi';
  
  const authenticate = (): void => {
    const authenticateUri = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
      '%20',
    )}&response_type=token`;
  
    window.location.href = authenticateUri;
  };
  
  export default authenticate;