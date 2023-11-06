import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/bs';

import { Datepicker, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import moment from 'moment/moment';
import useAuth from '../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';

import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const BookingFormModal = ({
	refetch,
	openBookingModal,
	room,
	onCloseModal,
}) => {
	const params = useParams();
	const { price, roomName, seatsAvailable, specialOffer, _id } = room;
	const { user } = useAuth();
	const axiosSecure = useAxios();
	const [bookingDetails, setBookingDetails] = useState({
		uid: user.uid,
		roomId: _id,
		price,
		date: new Date(),
		seatsCount: seatsAvailable,
	});

	const { mutateAsync } = useMutation({
		mutationFn: async data => {
			const response = await axiosSecure.post('/api/v1/user/book-room', data);
			return response.data;
		},
		onSuccess: () => {
			toast.success('Booking confirmed');
		},

		onError: () => {
			toast.error('Booking error');
		},
	});

	const handleBooking = async e => {
		e.preventDefault();
		console.log(bookingDetails);
		try {
			await mutateAsync(bookingDetails);
			axiosSecure
				.patch(`/api/v1/room/${params.roomId}`, {
					seatsCount: bookingDetails.seatsCount,
				})
				.then(res => {
					console.log(res);
					refetch();
				});
		} catch (error) {
			console.log(error);
		}
	};
	const calculatePriceAfterDiscount = price - (price * specialOffer) / 100;
	const handleOnChange = e => {
		setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
	};

	return (
		<Modal
			show={openBookingModal}
			theme={{
				root: {
					base: 'fixed top-0 right-0 left-0 z-30 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
					show: {
						on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
						off: 'hidden',
					},
				},
				content: {
					base: 'relative h-full w-full p-2 md:p-4 md:h-auto',
					inner:
						'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]',
				},
			}}
			size="md"
			onClose={onCloseModal}
			popup
		>
			<Modal.Header />
			<Modal.Body>
				<form onSubmit={handleBooking} className="space-y-6">
					<h3 className="text-xl font-medium text-gray-900 dark:text-white ">
						Book Your {roomName}
					</h3>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="name" value="Your Name" />
						</div>
						<TextInput
							id="name"
							name="name"
							placeholder="Enter your name"
							onChange={handleOnChange}
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="seatsCount" value="Book Seats" />
						</div>
						<Select
							theme={{
								field: {
									select: {
										base: `w-full ${
											seatsAvailable ? 'cursor-default' : 'cursor-not-allowed'
										}`,
									},
								},
							}}
							id="seatsCount"
							defaultValue={seatsAvailable}
							onChange={e => {
								setBookingDetails({
									...bookingDetails,
									seatsCount: Number(e.target.value),
								});
							}}
							name="seatsCount"
							required
						>
							{[...Array(seatsAvailable).keys()].map((seat, idx) => (
								<option key={idx} value={seat + 1}>
									{seat + 1}
								</option>
							))}
						</Select>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="price" value="Discounted price" />
						</div>
						<TextInput
							theme={{
								field: {
									input: {
										base: 'block w-full border cursor-not-allowed',
									},
								},
							}}
							id="price"
							name="price"
							icon={BsCurrencyDollar}
							defaultValue={calculatePriceAfterDiscount}
							readOnly
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="bookingDate" value="Booking Date" />
						</div>
						<Datepicker
							id="bookingDate"
							name="bookingDate"
							minDate={bookingDetails.date}
							showClearButton={false}
							onSelectedDateChanged={date => {
								setBookingDetails({
									...bookingDetails,
									date: moment(date).toISOString(),
								});
							}}
							defaultDate={bookingDetails.date}
							theme={{
								root: {
									base: 'relative',
								},

								popup: {
									root: {
										base: '',
										inner:
											'inline-block rounded-lg bg-white shadow-lg p-2 md:p-4 dark:bg-gray-700',
									},
									footer: {
										base: 'flex justify-center mt-2 space-x-2',
										button: {
											base: 'rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-[#b89470]',
											today:
												'text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76] ',
										},
									},
								},
								views: {
									days: {
										items: {
											base: 'grid w-64 grid-cols-7',
											item: {
												selected:
													'text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]',
												disabled: 'text-gray-500',
											},
										},
									},
								},
							}}
						/>
						{/* <input type="date" name="" id="" /> */}
					</div>

					<div className="w-full text-center">
						<button
							className={`text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76] px-3 py-1 rounded-md ${
								seatsAvailable
									? 'cursor-default'
									: 'cursor-not-allowed opacity-50'
							}`}
						>
							Book Now
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
};

BookingFormModal.propTypes = {
	onCloseModal: PropTypes.func,
	openBookingModal: PropTypes.bool,
	room: PropTypes.object,
	refetch: PropTypes.func,
};

export default BookingFormModal;
