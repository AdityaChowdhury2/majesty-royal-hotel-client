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
		() => {
			logOut();
		}
	);
	return secureAxios;
};

export default useAxios;
