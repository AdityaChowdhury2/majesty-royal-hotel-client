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

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(false);
			setUser(currentUser);
		});
		return () => unSubscribe();
	}, []);

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

	const updateUser = ({ displayName, photoURL }) => {
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
