import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ToastContext = createContext({});
const ToastProviders = ({ children }) => {
	const [message, setMessage] = useState();
	return (
		<ToastContext.Provider value={{ message, setMessage }}>
			{children}
		</ToastContext.Provider>
	);
};

ToastProviders.propTypes = {
	children: PropTypes.node,
};

export default ToastProviders;
