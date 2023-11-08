import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';

const secureAxios = axios.create({
	baseURL: 'http://localhost:5000',
	withCredentials: true,
});

const useAxios = () => {
	const { logOut } = useAuth();
	useEffect(() => {
		secureAxios.interceptors.response.use(
			response => response,
			err => {
				if (err.response.status === 401 || err.response.status === 403) {
					logOut()
						.then(() => {})
						.catch(err => console.log(err));
				}
			}
		);
	}, [logOut]);
	return secureAxios;
};

export default useAxios;
