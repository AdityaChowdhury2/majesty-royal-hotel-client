import PropTypes from 'prop-types';
import { Datepicker, Label, Modal, TextInput } from 'flowbite-react';
import { BsCurrencyDollar } from 'react-icons/bs';
import useAxios from '../hooks/useAxios';
import moment from 'moment';
import { useState } from 'react';
import toast from 'react-hot-toast';

const BookingUpdateModal = ({
	openUpdateModal,
	onCloseUpdateModal,
	booking,
}) => {
	console.log(booking);
	const [isAvailable, setIsAvailable] = useState(true);
	const [bookingDate, setBookingDate] = useState(booking.bookingDate);
	const secureAxios = useAxios();
	const checkIfAvailable = async date => {
		const response = await secureAxios.get(
			`/api/v1/bookings/?bookingDate=${moment(date).format(
				'DD-MM-YYYY'
			)}&roomId=${booking.roomId}`
		);
		if (response.data.length) {
			setIsAvailable(false);
			toast.error("It's not available on this date");
		} else {
			setIsAvailable(true);
		}
	};

	const handleUpdateBooking = async () => {
		const response = await secureAxios.patch(
			`/api/v1/bookings/${booking._id}`,
			{ bookingDate }
		);
		console.log(response.data);
		toast.success('Updated bookings');
	};

	return (
		<Modal
			show={openUpdateModal}
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
			onClose={onCloseUpdateModal}
			popup
		>
			<Modal.Header />
			<Modal.Body>
				<form
					onSubmit={e => {
						e.preventDefault();
						handleUpdateBooking();
					}}
					className="space-y-6"
				>
					<h3 className="text-xl font-medium text-gray-900 dark:text-white ">
						Book Your {booking.roomName}
					</h3>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="name" value="Your Name" />
						</div>
						<TextInput
							id="name"
							name="username"
							value={booking.username}
							readOnly
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="seatsCount" value="Book Seats" />
						</div>
						<TextInput
							id="seatsCount"
							name="seatsCount"
							value={booking.seatsCount}
							readOnly
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="price" value="Discounted price" />
						</div>
						<TextInput
							theme={{
								field: {
									input: {
										base: 'block w-full border',
									},
								},
							}}
							id="price"
							name="price"
							icon={BsCurrencyDollar}
							value={booking.price}
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
							minDate={new Date()}
							showClearButton={false}
							onSelectedDateChanged={date => {
								checkIfAvailable(date);
								setBookingDate(moment(date).format('DD-MM-YYYY'));
							}}
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
					</div>

					<div className="w-full text-center">
						<button
							className={`text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76] px-3 py-1 rounded-md ${
								isAvailable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
							}`}
							disabled={isAvailable ? false : true}
						>
							Book Now
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
};

BookingUpdateModal.propTypes = {
	booking: PropTypes.object,
	onCloseUpdateModal: PropTypes.func,
	openUpdateModal: PropTypes.bool,
};

export default BookingUpdateModal;
