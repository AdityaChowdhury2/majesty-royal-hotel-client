import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
	const { _id, roomName, specialOffer, thumbnailImage, price, seatsAvailable } =
		room;

	return (
		<Link to={`/room/${_id}`}>
			<div className="w-full max-w-sm bg-zinc-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
				<div className="relative overflow-hidden rounded-t-md ">
					<img
						className="p-8 md:min-h-[276px] hover:scale-150 duration-700 ease-in-out rounded-md "
						src={thumbnailImage}
						alt={`${roomName}'s image`}
					/>
					<h5 className="absolute bottom-8 left-10 text-3xl font-semibold tracking-tight text-[#8a735d] font-gilda-display">
						{roomName}
					</h5>
					{specialOffer ? (
						<div className="bg-[#C19B76] text-white px-2 w-24 absolute top-2 right-0 uppercase rounded-l-xl">
							{specialOffer}% off
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="px-5 pb-5">
					<div className="flex items-center justify-between mt-5">
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							Review
						</span>
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							${price}
						</span>
					</div>
					{seatsAvailable ? (
						<p>{seatsAvailable}&apos;s Seat</p>
					) : (
						<p>No seats available</p>
					)}
				</div>
			</div>
		</Link>
	);
};

RoomCard.propTypes = {
	room: PropTypes.object,
};

export default RoomCard;
