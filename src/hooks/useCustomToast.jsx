import CustomToast from '../components/shared/CustomToast';

const useCustomToast = ({ message }) => {
	console.log(message);
	return () => {
		<CustomToast>
			<p>{message}</p>
		</CustomToast>;
	};
};

export default useCustomToast;
