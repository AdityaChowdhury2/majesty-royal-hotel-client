import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Loading from './shared/Loading';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
	const axiosSecure = useAxios();
	const { data: reviews, isLoading } = useQuery({
		queryKey: ['reviewsForHome'],
		queryFn: async () => {
			const response = await axiosSecure.get('/api/v1/reviews/?limit=4');
			return response.data;
		},
	});

	return (
		<>
			<section className="my-8 dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
					<h1 className="p-4 text-4xl font-semibold leadi text-center">
						What our customers are saying about us
					</h1>
				</div>
				<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
					{isLoading ? (
						<div className="col-span-12 md:col-span-8 ">
							<Loading />
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							{reviews.map(review => (
								<TestimonialCard key={review._id} review={review} />
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Testimonial;
