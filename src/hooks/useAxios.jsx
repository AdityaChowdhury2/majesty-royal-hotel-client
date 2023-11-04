import axios from 'axios';
import useAuth from './useAuth';

const secureAxios = axios.create({
	baseURL: 'https://api.example.com',
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
	return;
};

export default useAxios;
