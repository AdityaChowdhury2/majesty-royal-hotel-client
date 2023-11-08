import { Avatar } from 'flowbite-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { AiTwotoneStar } from 'react-icons/ai';

const ReviewCard = ({ review }) => {
	const { userName, rating, photoURL, comment, timeStamp } = review;
	return (
		<div className="bg-neutral-200 drop-shadow-lg rounded-lg flex p-5 gap-4 ">
			<div className="w-1/12">
				<Avatar alt="User image" img={photoURL || ''} rounded />
			</div>
			<div className="flex flex-col flex-auto gap-4 w-11/12">
				<div className="flex text-sm space-x-2 ">
					<p>{userName}</p>
					<p>{moment(timeStamp).format('DD/MM/YYYY')}</p>
					<p className="flex items-center gap-1">
						{rating}{' '}
						<span>
							<AiTwotoneStar />
						</span>
					</p>
				</div>
				<p>{comment}</p>
			</div>
		</div>
	);
};

ReviewCard.propTypes = {
	review: PropTypes.object,
};

export default ReviewCard;
