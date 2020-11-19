import { createContext } from 'react';
import Auth from '../../services/auth';

const AuthContext = createContext<Auth>({} as Auth);

export default AuthContext;
