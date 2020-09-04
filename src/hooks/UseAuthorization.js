import { useContext } from 'react';
import AuthorizationContext from '../core/AuthorizationContext';

function useAuthorization() {
  return useContext(AuthorizationContext);
}

export default useAuthorization;
