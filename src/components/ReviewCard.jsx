import { Avatar } from 'flowbite-react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
	const { userName, rating, photoURL, comment, timeStamp } = review;
	return (
		<div className="bg-neutral-200 drop-shadow-lg rounded-lg flex p-5 gap-4">
			<Avatar alt="User image" img={photoURL || ''} rounded />
			<div className="flex  flex-col">
				<p className="text-sm space-x-4">
					<span>{userName}</span>
					<span>{moment(timeStamp).format('DD/MM/YYYY')}</span>
				</p>
				<p>{comment}</p>
			</div>
		</div>
	);
};

ReviewCard.propTypes = {
	review: PropTypes.object,
};

export default ReviewCard;
