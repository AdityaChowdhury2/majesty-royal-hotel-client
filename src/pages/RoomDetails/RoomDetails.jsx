import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import Loading from '../../components/shared/Loading';
import BookingFormModal from '../../components/BookingFormModal';
import ReactStars from 'react-rating-star-with-type';
import { useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import ReviewCard from '../../components/ReviewCard';

const RoomDetails = () => {
	const axiosSecure = useAxios();
	const { roomId } = useParams();
	const { user } = useAuth();
	const initialReview = {
		userEmail: user?.email,
		photoURL: user?.photoURL || '',
		userName: user?.displayName || '',
		uid: user?.uid,
		roomId,
		rating: 0,
		comment: '',
	};
	const [review, setReview] = useState(initialReview);
	const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
	const [openBookingModal, setOpenBookingModal] = useState(false);
	function onCloseModal() {
		setOpenBookingModal(false);
	}

	const { data: reviews } = useQuery({
		queryKey: ['review', isReviewSubmitted],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/api/v1/reviews/?roomId=${roomId}`
			);
			return response.data;
		},
	});

	const {
		data: room,
		isLoading,

		refetch,
	} = useQuery({
		queryKey: ['room'],
		queryFn: async () => {
			const response = await axiosSecure.get(`/api/v1/room/${roomId}`);
			return response.data;
		},
	});
	const {
		images,
		price,
		roomDescription,
		roomName,
		seatsAvailable,
		specialOffer,
		thumbnailImage,
	} = room || {};
	const handlePostReview = async e => {
		e.preventDefault();

		const response = await axiosSecure.post(`/api/v1/review`, review);

		if (response.data.acknowledged) {
			e.target.reset();
			setIsReviewSubmitted(true);
			setReview(initialReview);
		}
	};

	// console.log(images);

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-96">
					<Loading />
				</div>
			) : (
				<>
					<section
						className=" h-28 md:h-64 lg:h-96 bg-center  bg-no-repeat bg-[#1C1C1D] bg-blend-overlay bg-opacity-60 text-white font-gilda-display  "
						style={{ backgroundImage: `url(${thumbnailImage})` }}
					>
						<div className="container relative h-full flex justify-between">
							<div className="flex gap-4 items-center absolute left-5 bottom-5">
								<h1 className="text-3xl md:text-5xl lg:text-6xl">{roomName}</h1>
							</div>
							<div className="flex gap-4 items-center absolute right-5 bottom-5">
								<h1 className="text-3xl md:text-5xl lg:text-6xl">{price}</h1>
								<div className="flex flex-col">
									<span>$</span>
									<span>/ Per Night</span>
								</div>
							</div>
						</div>
					</section>
					<section className="my-10 container px-5">
						<div
							className="grid grid-cols-12 gap-5  
                "
						>
							<div className="col-span-12 md:col-span-8 ">
								<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
									<Carousel>
										{images?.map((image, idx) => (
											<div key={idx}>
												<img src={image} alt="" />
											</div>
										))}
									</Carousel>
								</div>
								<div className="mt-10">
									<p className="text-gray-700 text-justify">
										{roomDescription}
									</p>
									<h1 className="text-4xl">{seatsAvailable}</h1>
								</div>
							</div>
							<div className="col-span-12 md:col-span-4 ">
								<div className="relative ">
									<img
										src="https://i.ibb.co/y8sKJS8/advertise-1.jpg"
										alt=""
										className="rounded-lg"
									/>
									<div className="absolute top-0 w-full h-full bg-neutral-700 opacity-75 flex flex-col gap-5 justify-center items-center rounded-lg">
										{specialOffer ? (
											<>
												<h1 className="font-gilda-display text-4xl text-white">
													{specialOffer}% Off
												</h1>
												<p className="text-white">Grab the Offer Now</p>
											</>
										) : (
											<>
												<h1 className="font-gilda-display text-2xl p-5 text-white text-center">
													Get the room at affordable price
												</h1>
											</>
										)}
										<button
											onClick={() => setOpenBookingModal(true)}
											className="bg-[#C19B76] text-white px-2 py-1 rounded-md"
										>
											Book Now
										</button>
										<BookingFormModal
											room={room}
											refetch={refetch}
											openBookingModal={openBookingModal}
											onCloseModal={onCloseModal}
										/>
									</div>
								</div>
							</div>
							<div className="col-span-8">
								<h4 className="my-2 font-gilda-display text-3xl">
									User Reviews :
								</h4>
								{reviews.length > 0 ? (
									<div className="space-y-4">
										{reviews.map(rev => (
											<ReviewCard key={rev._id} review={rev} />
										))}
									</div>
								) : (
									<div>
										<p className="text-red-500">No review Found</p>
									</div>
								)}
								{/* */}

								<form onSubmit={handlePostReview} className="mt-10 space-y-4">
									<h3>Give a review: </h3>
									<div>
										<label className="block mb-2 text-sm font-medium">
											Rating
										</label>

										<div>
											<ReactStars
												valueShow
												value={review.rating}
												emptyIcon={<BsStar size={24} />}
												halfIcon={<BsStarHalf size={24} />}
												filledIcon={<BsStarFill size={24} />}
												isHalf
												isEdit
												onChange={value => {
													setIsReviewSubmitted(false);
													setReview({ ...review, rating: value });
												}}
											/>
										</div>
									</div>
									<div className="sm:col-span-2">
										<label
											htmlFor="comment"
											className="block mb-2 text-sm font-medium "
										>
											Comment
										</label>
										<textarea
											id="comment"
											name="comment"
											rows="8"
											onFocus={() => setIsReviewSubmitted(false)}
											onBlur={e => {
												setReview({ ...review, comment: e.target.value });
											}}
											className="block p-2.5  text-sm rounded-lg border w-full bg-zinc-200 border-gray-300 
								focus:outline-gray-300 focus:outline-2 focus:outline-offset-2"
											placeholder="Write a comment here"
										></textarea>
									</div>
									<button className="text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76] px-3 py-1 rounded-md">
										Submit
									</button>
								</form>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default RoomDetails;
