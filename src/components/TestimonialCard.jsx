import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import { AiTwotoneStar } from 'react-icons/ai';

const TestimonialCard = ({ review, idx }) => {
	const { photoURL, userName, rating, comment } = review;
	const zoomOptions = ['up', 'down', 'down', 'up'];
	return (
		<div
			className="flex flex-col mx-4 my-6 "
			data-aos={`zoom-out-${zoomOptions[idx]}`}
			data-aos-easing="linear"
			data-aos-duration="2000"
			data-aos-anchor-placement="top-bottom"
		>
			<div className="bg-neutral-50 rounded-xl drop-shadow-lg h-full">
				<div className="px-4 py-12 sm:px-8 md:px-12 ">
					<p className="relative px-6 py-1  md:text-lg italic text-center dark:text-gray-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							className="w-6 h-6 md:w-8 md:h-8 dark:text-violet-400"
						>
							<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
							<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
						</svg>
						{comment}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							className="absolute right-0 w-6 h-6 md:w-8 md:h-8 dark:text-violet-400"
						>
							<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
							<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
						</svg>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center p-8 rounded-b-lg space-y-3">
					<Avatar img={photoURL} alt="avatar of Jese" rounded />
					<p className="text-xl font-semibold leadi">{userName}</p>
					<p className="flex items-center gap-1 text-xl">
						{rating}{' '}
						<span>
							<AiTwotoneStar className="text-yellow-300" />
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

TestimonialCard.propTypes = {
	review: PropTypes.object,
	idx: PropTypes.number,
};

export default TestimonialCard;
