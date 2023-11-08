import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';

const secureAxios = axios.create({
	baseURL: 'https://hotel-management-server-aditya.vercel.app',
	withCredentials: true,
});

const useAxios = () => {
	const { logOut } = useAuth();
	useEffect(() => {
		secureAxios.interceptors.response.use(
			response => response,
			err => {
				console.log('error in interceptor', err.response.status);
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
