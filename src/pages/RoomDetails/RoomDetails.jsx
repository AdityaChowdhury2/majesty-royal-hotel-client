import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import { Avatar, Carousel } from 'flowbite-react';
import Loading from '../../components/shared/Loading';
import BookingFormModal from '../../components/BookingFormModal';
import { useState } from 'react';

const RoomDetails = () => {
	const axiosSecure = useAxios();
	const { roomId } = useParams();
	const [openBookingModal, setOpenBookingModal] = useState(false);
	function onCloseModal() {
		setOpenBookingModal(false);
		setEmail('');
	}

	const {
		data: room,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['room'],
		queryFn: async () => {
			const response = await axiosSecure.get(`/api/v1/room/${roomId}`);
			return response.data;
		},
	});
	console.log(room);
	const {
		images,
		price,
		roomDescription,
		roomName,
		roomSize,
		seatsAvailable,
		specialOffer,
		thumbnailImage,
		_id,
	} = room || {};
	console.log(images);
	const today = new Date();
	const month = today.getMonth();
	const date = today.getDate();
	const year = today.getFullYear();
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
								<div>
									<p className="text-red-500">No review Found</p>
								</div>
								{/* <div className="bg-neutral-200 drop-shadow-lg rounded-lg flex p-5 gap-4">
									<Avatar alt="User settings" img={''} rounded />
									<div className="flex  flex-col">
										<p className="text-sm space-x-4">
											<span>User</span>
											<span>{`${date}/${month}/${year}`}</span>
										</p>
										<p>Romm is very fine</p>
									</div>
								</div> */}
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default RoomDetails;
