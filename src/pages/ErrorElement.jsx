import { Link } from 'react-router-dom';
import errorAnimation from '../assets/animations/errorAnimation.json';
import Lottie from 'lottie-react';

const ErrorElement = () => {
	return (
		<div className="grid h-screen px-4 bg-white place-content-center">
			<div className="text-center">
				<Lottie animationData={errorAnimation} loop={false} />
				<h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Uh-oh!
				</h1>

				<p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

				<Link
					to={'/'}
					class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorElement;
