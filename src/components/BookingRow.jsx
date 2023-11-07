import { Table } from 'flowbite-react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import useAxios from '../hooks/useAxios';
import moment from 'moment';
import { useState } from 'react';
import DeleteBookingModal from './DeleteBookingModal';

const BookingRow = ({ booking, refetchBookings }) => {
	const axiosSecure = useAxios();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const { seatsCount, _id, bookingDate, roomName, price } = booking;
	const handleDeleteBooking = async () => {
		const today = moment();
		const bookingDay = moment(bookingDate, 'DD-MM-YYYY');
		const daysDiff = bookingDay.diff(today, 'days');

		if (daysDiff > 1) {
			const response = await axiosSecure.delete(`/api/v1/bookings/${_id}`);
			console.log(response.data);
			refetchBookings();
			toast.success('Bookings deleted successfully');
		} else {
			toast.error('Can not cancel booking');
		}
	};
	return (
		<Table.Row
			key={_id}
			className="bg-white dark:border-gray-700 dark:bg-gray-800"
		>
			<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
				{roomName}
			</Table.Cell>
			<Table.Cell>{seatsCount}</Table.Cell>
			<Table.Cell>{bookingDate}</Table.Cell>
			<Table.Cell>{price}</Table.Cell>
			<Table.Cell className="space-x-2">
				<button className="px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
					Update
				</button>
				<button
					onClick={() => {
						setOpenDeleteModal(true);
					}}
					className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
				>
					Cancel
				</button>
				<DeleteBookingModal
					setOpenDeleteModal={setOpenDeleteModal}
					openDeleteModal={openDeleteModal}
					handleDeleteBooking={handleDeleteBooking}
				/>
			</Table.Cell>
		</Table.Row>
	);
};

BookingRow.propTypes = {
	booking: PropTypes.object,
	refetchBookings: PropTypes.func,
};

export default BookingRow;
