import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useAuth = () => {
	const authData = useContext(AuthContext);
	return authData;
};

export default useAuth;
