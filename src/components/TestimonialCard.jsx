import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ review }) => {
	const { photoURL, userName, rating, comment } = review;
	return (
		<div className="flex flex-col w-full d mx-4 my-6">
			<div className="bg-neutral-50 drop-shadow-lg">
				<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
					<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							className="w-8 h-8 dark:text-violet-400"
						>
							<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
							<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
						</svg>
						{comment}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							className="absolute right-0 w-8 h-8 dark:text-violet-400"
						>
							<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
							<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
						</svg>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center p-8 rounded-b-lg space-y-3">
					<Avatar img={photoURL} alt="avatar of Jese" rounded />
					<p className="text-xl font-semibold leadi">Distinctio Animi</p>
					<p className="text-sm uppercase">Aliquam illum</p>
				</div>
			</div>
		</div>
	);
};

TestimonialCard.propTypes = {
	review: PropTypes.object,
};

export default TestimonialCard;
