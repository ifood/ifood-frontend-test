import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthContext, useAuthContext };
