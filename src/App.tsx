import React from 'react';
import { AppAuthorized } from './AppAuthorized';
import { AppUnauthorized } from './AppUnauthorized';
import { useAuth } from './hooks/useAuth';

export const App: React.FC = () => {
  const { auth } = useAuth();
  return auth ? <AppAuthorized /> : <AppUnauthorized />;
};
