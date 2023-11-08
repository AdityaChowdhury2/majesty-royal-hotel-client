import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../config/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			const loggedUser = currentUser?.email || user?.email;
			setLoading(false);
			setUser(currentUser);
			console.log('AuthProvider:', loggedUser);
			if (loggedUser) {
				axios
					.post(
						`${import.meta.env.VITE_SERVER_URL}/api/v1/user/create-token`,
						{
							email: loggedUser,
						},
						{ withCredentials: true }
					)
					.then(res => {
						console.log(res.data.message);
					})
					.catch(err => console.log(err));
			} else {
				axios
					.post(
						`${import.meta.env.VITE_SERVER_URL}/api/v1/user/logout`,
						{
							email: loggedUser,
						},
						{ withCredentials: true }
					)
					.then(res => {
						console.log(res.data.message);
					})
					.catch(err => console.log(err));
			}
		});
		return () => unSubscribe();
	}, [user]);

	const googleLogin = () => {
		const googleProvider = new GoogleAuthProvider();
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const createUser = ({ email, password }) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = ({ email, password }) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const updateUser = ({ displayName, photoURL = '' }) => {
		setLoading(true);
		return updateProfile(auth.currentUser, { displayName, photoURL });
	};

	const authData = {
		user,
		setUser,
		loading,
		googleLogin,
		loginUser,
		createUser,
		logOut,
		updateUser,
	};

	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
