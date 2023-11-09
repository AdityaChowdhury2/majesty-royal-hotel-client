import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Loading from './shared/Loading';
import TestimonialCard from './TestimonialCard';
import Lottie from 'lottie-react';
import notFound from '../assets/animations/notFound.json';

const Testimonial = () => {
	const secureAxios = useAxios();
	const {
		data: reviews,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['reviewsForHome'],
		queryFn: async () => {
			const response = await secureAxios.get('/api/v1/reviews/?limit=4');
			return response.data;
		},
	});

	return (
		<>
			<section className="my-8 dark:bg-gray-800 dark:text-gray-100 px-2">
				<div className="container flex flex-col items-center mx-auto mb-5 md:mb-8 lg:mb-12 md:p-10 md:px-12">
					<h1 className="p-4 text-xl md:text-2xl lg:text-4xl font-semibold  text-center">
						What our customers are saying about us
					</h1>
				</div>
				<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
					{isLoading ? (
						<div className="col-span-12 md:col-span-8 ">
							<Loading />
						</div>
					) : isError ? (
						<>
							<Lottie animationData={notFound} loop={false}></Lottie>
						</>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden">
							{reviews.map((review, idx) => (
								<TestimonialCard idx={idx} key={review._id} review={review} />
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Testimonial;
