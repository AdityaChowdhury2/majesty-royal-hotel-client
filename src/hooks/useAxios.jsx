import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect } from 'react';

const secureAxios = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
	withCredentials: true,
});

const useAxios = () => {
	// const { logOut } = useAuth();
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	secureAxios.interceptors.response.use(
	// 		response => {
	// 			return response;
	// 		},
	// 		err => {
	// 			console.log(err.response.code);
	// 			logOut()
	// 				.then(() => {
	// 					navigate('/login');
	// 				})
	// 				.catch(err => console.log(err));
	// 		}
	// 	);
	// }, []);
	return secureAxios;
};

export default useAxios;
