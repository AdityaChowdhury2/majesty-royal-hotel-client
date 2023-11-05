import { useContext } from 'react';
import { ToastContext } from '../providers/ToastProviders';

const useCustomToast = () => {
	const customToast = useContext(ToastContext);
	return customToast;
};

export default useCustomToast;
