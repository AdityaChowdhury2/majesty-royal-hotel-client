import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
	const {
		_id,
		roomName,
		specialOffer,
		reviewCount = 0,
		thumbnailImage,
		price,
		seatsAvailable,
	} = room;

	return (
		<div className="w-full max-w-sm bg-zinc-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
			<Link to={`/room/${_id}`} className="w-full">
				<div className="relative overflow-hidden rounded-t-md">
					<img
						className="p-8 w-full md:max-h-[276px] hover:scale-150 duration-700 ease-in-out rounded-md "
						src={thumbnailImage}
						alt={`${roomName}'s image`}
					/>
					<h5 className="absolute bottom-8 left-10 text-3xl font-semibold tracking-tight text-[#8a735d] font-gilda-display">
						{roomName}
					</h5>
					{specialOffer && seatsAvailable ? (
						<div className="bg-[#C19B76] text-white px-2 w-24 absolute top-2 right-0 uppercase rounded-l-xl">
							{specialOffer}% off
						</div>
					) : seatsAvailable ? (
						<></>
					) : (
						<div className="bg-red-500 text-white px-2 w-36  absolute top-2 right-0 rounded-l-xl">
							Not available
						</div>
					)}
				</div>
				<div className="px-5 pb-5">
					<div className="flex items-center justify-between mt-5">
						{/* <span className="text-3xl font-bold text-gray-900 dark:text-white"> */}

						{/* </span> */}
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							${price}
						</span>
						{reviewCount ? (
							<p>{reviewCount}&apos;s Review</p>
						) : (
							<p>No Review found</p>
						)}
					</div>
					{seatsAvailable ? <p>{seatsAvailable}&apos;s Seat</p> : <></>}
				</div>
			</Link>
		</div>
	);
};

RoomCard.propTypes = {
	room: PropTypes.object,
};

export default RoomCard;
