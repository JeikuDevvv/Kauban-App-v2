import React from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './AppStack';
import AuthStack from './AuthStack';

export default function Routes() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
