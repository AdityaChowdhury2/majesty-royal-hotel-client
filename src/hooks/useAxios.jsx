import axios from 'axios';
import useAuth from './useAuth';

const secureAxios = axios.create({
	baseURL: 'http://localhost:5000',
	withCredentials: true,
});

const useAxios = () => {
	const { logOut } = useAuth();
	secureAxios.interceptors.response.use(
		response => {
			return response;
		},
		err => {
			if (err.response.status === 401 || err.response.status === 403) {
				logOut();
			}
		}
	);
	return secureAxios;
};

export default useAxios;
