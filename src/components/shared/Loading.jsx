import Lottie from 'lottie-react';
import loading from '../../assets/animations/loading.json';

const Loading = () => {
	return (
		<div className="col-span-12 md:col-span-8 ">
			<Lottie animationData={loading}></Lottie>
		</div>
	);
};

export default Loading;
