import { useContext, useEffect } from 'react';
import { ToastContext } from '../../providers/ToastProviders';
import { FcOk } from 'react-icons/fc';

const CustomToast = () => {
	const { message, setMessage } = useContext(ToastContext);
	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage('');
		}, 3000);
		return () => clearTimeout(timer);
	}, [message, setMessage]);
	return (
		<>
			{message ? (
				<div className="absolute top-5 right-[42%] p-3 bg-[#C19B76] rounded flex gap-3 items-center text-white">
					<FcOk size={24} />
					<p>{message}</p>
				</div>
			) : (
				<div className="asdf"></div>
			)}
		</>
	);
};

export default CustomToast;
